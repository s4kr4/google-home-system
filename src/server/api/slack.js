import Router from 'koa-router'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const router = new Router()

router.get('/', async (ctx, next) => {
  const response = await axios
    .post(process.env.WEBHOOK_URI, {
      text: 'test'
    })

  ctx.body = {
    message: response.statusText
  }
})

export default router
