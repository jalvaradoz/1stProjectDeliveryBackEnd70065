import express from 'express'
import productsRouter from './routes/products.router.js'
import cartRouter from './routes/cart.router.js'

const app = express()
const PORT = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.use('/api', productsRouter)
app.use('/api', cartRouter)