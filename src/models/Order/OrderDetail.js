import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class OrderDetail extends Model {}

OrderDetail.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    //order fk
    //idProduct fk
    //price ??
    //creationDate
    //updateDate
    quantity: {
      type: Dt.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'OrderDetail',
  }
)

export default OrderDetail
