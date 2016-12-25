const Koa = require('koa')
const serve = require('koa-serve')
const path = require('path')

const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.path === '/verify') {
    const { text } = ctx.query
    if (/^[a-zA-Z]+$/.test(text)) {
      ctx.body = '1'
      return
    }
    ctx.body = '名称必须为字母'
    ctx.status = 500
    return
  }
  await next()
})

app.use(serve('', path.resolve(__dirname, 'public')))

app.listen(3000, () => {
  console.log('server start at port 3000')
})

