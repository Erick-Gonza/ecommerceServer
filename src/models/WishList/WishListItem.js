import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class WishListItem extends Model {}

WishListItem.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'WishListItem'
  }
)

export default WishListItem
