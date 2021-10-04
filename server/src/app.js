/**
 * Create by ToanNTe on 16/09/2021
 */
const authRouter = require('./routers/auth')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 8866
const db = require('./config/db')
const cors = require('cors');
app.use(express.json());

app.use(cors())
db.connect()
app.use(morgan('combined'))
app.use('/api/auth', authRouter)
app.use('/api/categorys', categoryRouter)
app.use('/api/products', productRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

