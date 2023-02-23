# Ecommerce Pink Neon - Server

This project is the server for the management of the ecommerce site, it is based on the MVC architecture, adding the single responsibility pattern.

## Folder Structure

```bash
.
├── src
│   ├── config
│   │   ├── authToken.js
│   │   └── database.js
│   │
│   ├── controllers
│   │   ├── Address/address.js
│   │   ├── Cart/cart.js
│   │   ├── Category/category.js
│   │   ├── Order/order.js
│   │   ├── OrderDetail/orderDetail.js
│   │   ├── Product/product.js
│   │   ├── SubCategory/subCategory.js
│   │   ├── User/user.js
│   │   └── WishList/wishList.js
│   │
│   ├── models
│   │   ├── Cart
│   │   │   ├── Cart.js
│   │   │   └── CartItem.js
│   │   ├── Order
│   │   │   ├── Order.js
│   │   │   └── OrderDetail.js
│   │   ├── Product
│   │   │   ├── Product.js
│   │   │   ├── Category.js
│   │   │   └── Subcategory.js
│   │   ├── User
│   │   │   ├── Address
│   │   │   │   ├── Address.js
│   │   │   │   ├── Country.js
│   │   │   │   └── State.js
│   │   │   ├── Role.js
│   │   │   ├── Status.js
│   │   │   ├── User.js
│   │   │   └── UserAddress.js
│   │   ├── WishList
│   │   │   └── wishList.js
│   │   └── index.js
│   │
│   ├── routes
│   │   ├── address
│   │   │   └── address.js
│   │   ├── cart
│   │   │   └── cart.js
│   │   ├── category
│   │   │   └── category.js
│   │   ├── order
│   │   │   ├── order.js
│   │   │   └── orderDetail.js
│   │   ├── product
│   │   │   └── product.js
│   │   ├── subCategory
│   │   │   └── subCategory.js
│   │   ├── user
│   │   │   └── user.js
│   │   ├── wishList
│   │   │   └── wishList.js
│   │   └── index.js
│   │
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   ├── LICENSE
│   ├── package-lock.json
└── └── package.json


```

## Installation

Clone repo via https://github.com/Erick-Gonza/ecommerceServer.git

Before installing the dependencies, check the required environment variables.

Start your MySQL database with the same name as .env environment variable.

```bash
    cd ecommerceServer
    npm i
    npm run dev || npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_NAME`

`DB_USER_NAME`

`DB_PASSWORD`

`DB_HOST`

`DB_PORT`

`PORT`

`SECRET`

## Authors

- [@Erick-Gonza](https://github.com/Erick-Gonza)
- [@OdalysAdamari](https://github.com/OdalysAdamari)
- [@IdaliaAT](https://github.com/IdaliaAT)
- [@OmarCavazos](https://github.com/OmarCavazos)
