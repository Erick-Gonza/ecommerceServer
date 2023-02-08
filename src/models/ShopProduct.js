import { DataTypes as Dt, Model } from 'sequelize'
import db from '../config/database.js'

class ShopProduct extends Model {}

ShopProduct.init(
  {
    //id
    //product id
    // user id
    quantity: {
      type: Dt.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'ShopProduct',
  }
)

export default ShopProduct
