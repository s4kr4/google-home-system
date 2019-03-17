import Router from 'koa-router'
import axios from 'axios'
import dotenv from 'dotenv'

import file from '../helper/file'
import notifier from '../helper/notifier'

dotenv.config()

const router = new Router()

router.get('/', async (ctx, next) => {
  const data = file.readFile('/home/pi/python/record.csv')
  const latest = data[data.length - 1]
  const temperature = latest[1]
  const date = new Date()
  const hour = date.getHours()
  const message = `${hour}時です。現在の室温は${temperature}度です。`

  await notifier.say(message)

  await axios.post(process.env.WEBHOOK_URI, {
    text: message
  })

  ctx.body = {
    message: message
  }
})

export default router
