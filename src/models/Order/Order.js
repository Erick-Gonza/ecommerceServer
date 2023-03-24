import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Order extends Model {}

Order.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize: db,
    modelName: 'Order'
  }
)

export default Order
