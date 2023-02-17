import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class OrderDetail extends Model {}

OrderDetail.init(
  {
    //id
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
