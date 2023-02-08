import Product from "./Product.js";
import User from "./User.js";
import Category from "./Category.js";
import Subcategory from "./Subcategory.js";
import Order  from "./Order.js";
import OrderItem from "./OrderItem.js";
import Price from "./Price.js";
import WishProduct from "./WishProduct.js";
import ShopProduct from "./ShopProduct.js"

Category.hasMany(Subcategory, {
    foreignKey: {
        field: "categoryId"
    },
    //onDelete:"CASCADE"
});
Subcategory.belongsTo(Category);

Subcategory.hasMany(Product, {
    foreignKey: {
        field: "subcategoryId"
    },
    //onDelete:"CASCADE"
});
Product.belongsTo(Subcategory);

Price.hasOne(Product, {
    foreignKey: {
        field: "priceId"
    },
});
Product.belongsTo(Price);

Product.belongsToMany(WishProduct, {
    through: "ProductWishProduct"
});

User.hasOne(WishProduct, {
    foreignKey: {
        field: "userId"
    },
});
WishProduct.belongsTo(User);

Product.hasMany(ShopProduct, {
    foreignKey: {
        field: "productId"
    },
});
ShopProduct.belongsTo(Product);

User.hasOne(ShopProduct, {
    foreignKey: {
        field: "userId"
    },
});
ShopProduct.belongsTo(User);

Product.hasMany(OrderItem, {
    foreignKey: {
        field: "productId"
    }
});
OrderItem.belongsTo(Product);

Order.hasMany(OrderItem, {
    foreignKey: {
        field: "orderId"
    }
});
OrderItem.belongsTo(Order);

User.hasMany(Order, {
    foreignKey: {
        field: "userId"
    }
});
Order.belongsTo(User);



export {Product, User, Category, Subcategory, Order, OrderItem, Price, WishProduct, ShopProduct}