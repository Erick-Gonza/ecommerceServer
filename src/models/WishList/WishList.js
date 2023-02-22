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
    
  },
  {
    sequelize: db,
    modelName: 'WishList',
  }
)

export default WishList
