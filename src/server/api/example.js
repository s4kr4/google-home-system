import Router from 'koa-router'

const router = new Router()

router.get('/example', async (ctx, next) => {
  ctx.body = {
    foo: 'bar'
  }
})

export default router
