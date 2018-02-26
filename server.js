const Koa = require('koa')
const serve = require('koa-serve')
const path = require('path')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, t)
  })
}

app.use(async (ctx, next) => {
  if (ctx.path === '/wait') {
    let i = 0
    const inter = setInterval(() => {
      console.log(i++)
    }, 1000)
    await sleep(30000)
    clearInterval(inter)
    ctx.body = 'sleep 30000'
    return
  }
  await next()
})

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

// app.use(async (ctx, next) => {
//   if (ctx.path === '/collect') {
//     console.log('cccaaa', ctx.request.body)
//     ctx.body = '1'
//     return
//   }
//   await next()
// })

app.use(serve('', path.resolve(__dirname, 'public')))

app.listen(3000, () => {
  console.log('server start at port 3000')
})

