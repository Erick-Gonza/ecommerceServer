import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class WishList extends Model {}

WishList.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: Dt.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    UserId: {
      type: Dt.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'WishList',
  }
)

export default WishList
