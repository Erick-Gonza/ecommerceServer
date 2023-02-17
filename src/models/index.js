import Cart from "./Cart/Cart.js";
import Order from "./Order/Order.js";
import OrderDetail from "./Order/OrderDetail.js";
import Category from "./Product/Category.js";
import Product from "./Product/Product.js";
import Subcategory from "./Product/Subcategory.js";
import Address from "./User/Address.js";
import Role from "./User/Role.js";
import State from "./User/State.js";
import User from "./User/User.js";
import WishList from "./WishList/WishList.js";



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

Product.belongsToMany(WishList, {
    through: "ProductWishList"
});

User.hasOne(WishList, {
    foreignKey: {
        field: "userId"
    },
});
WishList.belongsTo(User);

User.hasOne(Cart, {
    foreignKey: {
        field: "userId"
    },
});
Cart.belongsTo(User);

Product.hasMany(Cart, {
    foreignKey: {
        field: "productId"
    },
});
Cart.belongsTo(Product);

Product.hasMany(OrderDetail, {
    foreignKey: {
        field: "productId"
    }
});
OrderDetail.belongsTo(Product);

Order.hasMany(OrderDetail, {
    foreignKey: {
        field: "orderId"
    }
});
OrderDetail.belongsTo(Order);

User.hasMany(Order, {
    foreignKey: {
        field: "userId"
    }
});
Order.belongsTo(User);

//role 
Role.hasOne(User, {
    foreignKey: {
        field: "RoleId"
    },
});
User.belongsTo(Role);

//state
State.hasOne(User, {
    foreignKey: {
        field: "StateId"
    },
});
User.belongsTo(State);

//address
User.hasOne(Address, {
    foreignKey: {
        field: "userId"
    }
});
Address.belongsTo(User);



export {Product, User, Category, Subcategory, Order, OrderDetail, Address, Role, Cart, WishList, State}