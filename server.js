const Koa = require('koa')
const serve = require('koa-serve')
const path = require('path')

const app = new Koa()

app.use(serve('', path.resolve(__dirname, 'public')))

app.listen(3000, () => {
  console.log('server start at port 3000')
})

