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
    // idUser fk
    // CreationDate
    // updateDate
    // address fk
  },
  {
    sequelize: db,
    modelName: 'Order'
  }
)

export default Order
