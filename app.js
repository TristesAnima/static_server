const express = require('express')

const app = express()

// 隐藏路径前缀
app.use(express.static('./static'))

// 挂载路径前缀
// app.use('/static', express.static('./static'))

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})