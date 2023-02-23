import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class CartItem extends Model {}

CartItem.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false
    },
    //product id fk
    // user id fk
    quantity: {
       type: Dt.INTEGER,
       allowNull: false
     },
    // total: {
    //   type: Dt.DECIMAL,
    // },
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'CartItem',
  }
)

export default CartItem
