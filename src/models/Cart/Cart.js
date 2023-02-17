import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Cart extends Model {}

Cart.init(
  {
    //id
    //product id fk
    // user id fk
    quantity: {
      type: Dt.INTEGER,
    },
    total: {
      type: Dt.DECIMAL,
    },
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'Cart',
  }
)

export default Cart
