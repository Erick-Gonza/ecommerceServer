import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    userId: {
      type: Dt.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    }
  },
  {
    sequelize: db,
    modelName: 'Cart'
  }
)

Cart.afterSync(async () => {
  await Cart.create({
    userId: 1
  })
})

export default Cart
