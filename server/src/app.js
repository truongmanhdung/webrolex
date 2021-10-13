/**
 * Create by DungTMc on 30/9/2021
 */
const authRouter = require('./routers/auth')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')
const accessoryRouter = require('./routers/accessory')
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
app.use('/api', authRouter)
app.use('/api', categoryRouter)
app.use('/api', productRouter)
app.use('/api', accessoryRouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

