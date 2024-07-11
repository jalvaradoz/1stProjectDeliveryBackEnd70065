# Back End API project 1st delivery

#### `dev ~ Joey Alvarado`

## Description

This project is a backend application using Node.js and Express for managing products and carts. The API provides routes to perform CRUD operations on products and carts. Below is a detailed description of the setup and routes.

## Table of contents

1. Installation
2. Usage
3. API Endpoints
   - products
   - carts
4. Middleware
5. Contributing
6. License

<br>

## Installation

1. Clone the repository:

```bash
git clone
```

2. Navigate to the project directory:

```bash
cd backend-project
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Start the server

```bash
npm start
```

2. The server will be running on port 8080. You can change the port in the app.js file if needed.

## API Endpoints

### Products

- Get all products

```bash
GET /api/products
```

![Screenshot of the GET all products endpoint.](/assets/img/getProducts-raiz.png)

- Query parameters:

  - 'limit' (optional): Limit the number of products returned.

![Screenshot of the GET all products with a query param endpoint.](/assets/img/getProductsLimit.png)

- Get a specific product by ID

```bash
GET /api/products/:pid
```

- Path parameters:
  - 'pid': The ID of the product

![Screenshot of the GET a product by ID endpoint.](/assets/img/getProductsId.png)

- Add a new product from body

```bash
POST /api/products
```

- Body parameters

  - title.
  - description.
  - code.
  - price.
  - stock.
  - category.
  - thumbnails (optional): Array of thumbnail URLs.

![Screenshot of the POST new product from body endpoint.](/assets/img/postNewProduct.png)

- Update a product by ID from the body

```bash
PUT /api/products/:pid
```

- Path parameters:

  - 'pid': The ID of the product

- Body parameters

  - Any of the product fields that need to be updated

![Screenshot of the PUT to update a product by ID endpoint.](/assets/img/putUpdateExistingProduct.png)

- Delete a product by ID

```bash
DELETE /api/products/:pid
```

- Path parameters:
  - 'pid': The ID of the product

![Screenshot of the DELETE product by ID endpoint.](/assets/img/deleteProduct.png)

### Carts

- Get all carts

```bash
GET /api/carts
```

![Screenshot of the GET all carts.](/assets/img/getcarts.png)

- Create a new cart

```bash
POST /api/carts
```

![Screenshot of the POST a new cart.](/assets/img/postNewCart.png)

- Get a specific cart by ID

```bash
GET /api/carts/:cid
```

- Path Parameters:

  - cid: The ID of the cart.

![Screenshot of the GET cart by ID.](/assets/img/getCartById.png)

- Add a product to a cart

```bash
POST /api/carts/:cid/product/:pid
```

- Path Parameters:

  - cid: The ID of the cart.
  - pid: The ID of the product.

![Screenshot of the GET cart by ID.](/assets/img/postNewProductToCart.png)

## Middleware

```javascript
import express from "express";
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.use("/api", productsRouter);
app.use("/api", cartRouter);
```

- products.router.js

  - [Content of the products router code]

- cart.router.js

  - [Content of the cart router code]

## Technologies

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,js,vscode,postman&theme=dark)](https://skillicons.dev)

## Contact

<p align="center">
  <a href="https://github.com/jalvaradoz">
    <img src="https://skillicons.dev/icons?i=github" />
  </a>
  <a href="https://www.linkedin.com/in/joey-alvarado-741a36180/">
    <img src="https://skillicons.dev/icons?i=linkedin" />
  </a>
  <a href="https://joeyalvarado.netlify.app/">
    <img src="https://joeyalvarado.netlify.app/Assets/Img/joeyContact.png" width='50px'/>
  </a>
</p>

## Contributions

If you want to contribute to this project, please fork the repository and create a pull request.

## License

#### This project is licensed under the MIT License.
