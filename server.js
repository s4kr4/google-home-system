import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import json from 'koa-json'

import apiRouter from './src/server/api/example'

const port = process.env.PORT || 3000

const app = new Koa()
const router = new Router()

router.use('/api', apiRouter.routes())

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(json())
  .use(serve(__dirname + '/app/dist'))
  .listen(port)
