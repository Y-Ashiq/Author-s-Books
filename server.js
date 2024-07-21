import express from 'express'
import connectDB from './src/database/DBconnection.js'
import bookRouter from './src/modules/bookModule/book.routes.js'
import authorRouter from './src/modules/authorModule/author.routes.js'
const app = express()
const port = 3000


app.use(express.json())
app.use('/api/book',bookRouter)
app.use('/api/author',authorRouter)


connectDB
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))