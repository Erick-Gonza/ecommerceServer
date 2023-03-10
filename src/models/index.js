import Cart from './Cart/Cart.js'
import Order from './Order/Order.js'
import OrderDetail from './Order/OrderDetail.js'
import Category from './Product/Category.js'
import Product from './Product/Product.js'
import Subcategory from './Product/Subcategory.js'
import Address from './User/Address/Address.js'
import Role from './User/Role.js'
import Status from './User/Status.js'
import User from './User/User.js'
import WishList from './WishList/WishList.js'
import State from './User/Address/State.js'
import Country from './User/Address/Country.js'
import UserAddress from './User/UserAddress.js'
import CartItem from './Cart/CartItem.js'
import WishListItem from './WishList/WishListItem.js'

// User - Role
Role.hasMany(User, { as: 'user', foreignKey: 'roleId' })
User.belongsTo(Role, { as: 'role', foreignKey: 'roleId' })

// // User - Status
Status.hasMany(User, { foreignKey: 'statusId' })
User.belongsTo(Status, { foreignKey: 'statusId' })

// // User - Address
User.belongsToMany(Address, { through: UserAddress, foreignKey: 'userId' })
Address.belongsToMany(User, { through: UserAddress, foreignKey: 'addressId' })

// // User - WishList
User.hasOne(WishList, { foreignKey: 'userId' })
WishList.belongsTo(User, { foreignKey: 'userId' })

// // WishListITEM - Product
WishList.belongsToMany(Product, {
  through: WishListItem,
  foreignKey: 'wishlistId'
})
Product.belongsToMany(WishList, {
  through: WishListItem,
  foreignKey: 'productId'
})

// // User - Order
User.hasMany(Order, { foreignKey: 'userId' })
Order.belongsTo(User, { foreignKey: 'userId' })

// //Product - subcategory
Subcategory.hasMany(Product, { foreignKey: 'subcategoryId' })
Product.belongsTo(Subcategory, { foreignKey: 'subcategoryId' })

// //Product - Category
Category.hasMany(Product, { foreignKey: 'categoryId' })
Product.belongsTo(Category, { foreignKey: 'categoryId' })

// Product-CartITEM
Cart.belongsToMany(Product, { through: CartItem, foreignKey: 'cartId' })
Product.belongsToMany(Cart, { through: CartItem, foreignKey: 'productId' })

// Product - OrderDetail
Product.hasMany(OrderDetail, { foreignKey: 'productId' })
OrderDetail.belongsTo(Product, { foreignKey: 'productId' })

// Category - SubCategory **
Category.hasMany(Subcategory, { foreignKey: 'categoryId' })
Subcategory.belongsTo(Category, { foreignKey: 'categoryId' })

// User - Cart
User.hasOne(Cart, { foreignKey: 'userId' })
Cart.belongsTo(User, { foreignKey: 'userId' })

// order - orderDetail
Order.hasMany(OrderDetail, { foreignKey: 'orderId' })
OrderDetail.belongsTo(Order, { foreignKey: 'orderId' })

// order-address     USERADDRESS??
Address.hasMany(Order, { foreignKey: 'addressId' })
Order.belongsTo(Address, { foreignKey: 'addressId' })

// country- address
Country.hasMany(Address, { foreignKey: 'countryId' })
Address.belongsTo(Country, { foreignKey: 'countryId' })

// state-address
State.hasMany(Address, { foreignKey: 'stateId' })
Address.belongsTo(State, { foreignKey: 'stateId' })

// User.belongsTo(Cart, {
//   foreignKey: 'wishListId',
//   target: 'id',
// })

// Cart.hasOne(User, {
//   foreignKey: 'cartId',
//   sourceKey: 'id',
// })

// Category.hasMany(Subcategory, {
//   foreignKey: 'categoryId',
//   sourceKey: 'id',
// })

// Subcategory.belongsTo(Category, {
//   foreignKey: 'categoryId',
//   target: 'id',
// })

export {
  Product,
  User,
  Category,
  Subcategory,
  Order,
  OrderDetail,
  Address,
  Role,
  Cart,
  WishList,
  Status,
  Country,
  State,
  WishListItem
}
