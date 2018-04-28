import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import json from 'koa-json'

import temperature from './src/server/api/temperature'
import aircon from './src/server/api/aircon'
import slack from './src/server/api/slack'

const port = process.env.PORT || 3000

const app = new Koa()
const router = new Router()

router.use('/api/temperature', temperature.routes())
router.use('/api/aircon', aircon.routes())
router.use('/api/slack', slack.routes())

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(json())
  .use(serve(__dirname + '/www'))
  .listen(port)
