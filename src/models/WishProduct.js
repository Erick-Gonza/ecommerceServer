import { DataTypes as Dt, Model } from 'sequelize'
import db from '../config/database.js'

class WishProduct extends Model {}

WishProduct.init(
  {
    //id
    //product id
    // user id
  },
  {
    sequelize: db,
    modelName: 'WishProduct',
  }
)

export default WishProduct
