import Router from 'koa-router'
import { exec } from 'child_process'

const router = new Router()

router.get('/hot', async (ctx, next) => {
  exec('irsend SEND_ONCE aircon hot_on')

  ctx.body = {
    message: 'aircon: hot on'
  }
})

router.get('/cool', async (ctx, next) => {
  exec('irsend SEND_ONCE aircon cool_on')

  ctx.body = {
    message: 'aircon: cool on'
  }
})

router.get('/off', async (ctx, next) => {
  exec('irsend SEND_ONCE aircon off')

  ctx.body = {
    message: 'aircon: off'
  }
})

export default router
