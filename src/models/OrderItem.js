import { DataTypes as Dt, Model } from 'sequelize'
import db from '../config/database.js'

class OrderItem extends Model {}

OrderItem.init(
  {
    //id
    //price
    //product id
    quantity: {
      type: Dt.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'OrderItem',
  }
)

export default OrderItem
