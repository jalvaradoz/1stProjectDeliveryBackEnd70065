import { Router } from "express"
import fs from 'fs/promises'

const cartRouter = Router()

const getCarts = async () => {
    try {
        const data = await fs.readFile("./src/carts.json", "utf-8")
        return JSON.parse(data)
    } catch (err) {
        console.error(err)
        throw new Error('Internal Server Error')
    }
}
const getProducts = async () => {
    try {
        const data = await fs.readFile("./src/products.json", "utf-8")
        return JSON.parse(data)
    } catch (err) {
        console.error(err)
        throw new Error('Internal Server Error')
    }
}

cartRouter.get('/carts', async (req, res) => {
    const carts = await getCarts()
    res.json({ carts })
})

cartRouter.post('/carts', async (req, res) => {
    try {
        const carts = await getCarts()

        const newCartId = carts.length + 1
        const newCart = { id: String(newCartId), products: [] }

        carts.push(newCart)
        await fs.writeFile("./src/carts.json", JSON.stringify(carts, null, 2))

        res.status(201).json({ message: 'Cart created successfully', cartCreated: newCart })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

cartRouter.get('/carts/:cid', async (req, res) => {
    try {
        const carts = await getCarts()
        let cartById = carts.find(c => c.id === req.params.cid)

        if (!cartById) {
            return res.status(404).json({ error: 'Cart not found' })
        }

        const productsOnCart = cartById.products

        res.json({ cartId: cartById.id, productsOnCart })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

cartRouter.post('/carts/:cid/product/:pid', async (req, res) => {
    try {
        const carts = await getCarts()
        const products = await getProducts()
        let cartById = carts.find(c => c.id === req.params.cid)

        if (!cartById) {
            return res.status(404).json({ error: 'Cart not found' })
        }

        let productById = products.find(p => p.id === req.params.pid)

        if (!productById) {
            return res.status(404).json({ error: 'Product not found' })
        }

        let productInCart = cartById.products.find(p => p.id === productById.id)

        if (productInCart) {
            productInCart.quantity += 1
        } else {
            cartById.products.push({ id: productById.id, quantity: 1 })
        }

        await fs.writeFile("./src/carts.json", JSON.stringify(carts, null, 2))

        res.status(201).json({ message: 'Product added to cart!', cart: cartById })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

export default cartRouter