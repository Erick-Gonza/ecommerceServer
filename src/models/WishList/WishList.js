import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class WishList extends Model {}

WishList.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize: db,
    modelName: 'WishList'
  }
)

WishList.afterSync(async () => {
  await WishList.create({
    userId: 1
  })
})

export default WishList
