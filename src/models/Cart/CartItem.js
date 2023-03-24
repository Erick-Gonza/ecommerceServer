import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class CartItem extends Model {}

CartItem.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    quantity: {
      type: Dt.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'CartItem'
  }
)

export default CartItem
