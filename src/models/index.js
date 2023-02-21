import Cart from './Cart/Cart.js'
import Order from './Order/Order.js'
import OrderDetail from './Order/OrderDetail.js'
import Category from './Product/Category.js'
import Product from './Product/Product.js'
import Subcategory from './Product/SubCategory.js'
import Address from './User/Address/Address.js'
import Role from './User/Role.js'
import Status from './User/Status.js'
import User from './User/User.js'
import WishList from './WishList/WishList.js'
import State from './User/Address/State.js'
import Country from './User/Address/Country.js'

// User - Role
User.hasOne(Role, {
  foreignKey: 'id',
  sourceKey: 'roleId',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})
Role.belongsTo(User, {
  foreignKey: 'id',
  targetKey: 'roleId',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})

// User - Status
User.hasOne(Status, {
  foreignKey: 'id',
  sourceKey: 'statusId',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})
Status.belongsTo(User, {
  foreignKey: 'id',
  targetKey: 'statusId',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})

// User - Address
User.hasMany(Address, {
  foreignKey: 'userId',
  sourceKey: 'id',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})
Address.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})

// User - WishList
User.hasMany(WishList, {
  foreignKey: 'productId',
  sourceKey: 'id',
})
WishList.belongsTo(User, {
  foreignKey: 'productId',
  targetKey: 'id',
})

// WishList - Product
WishList.hasMany(Product, {
  foreignKey: 'wishListProductId',
  sourceKey: 'id',
})
Product.belongsTo(WishList, {
  foreignKey: 'wishListProductId',
  targetKey: 'id',
})

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
}
