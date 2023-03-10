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

WishListItem.afterSync(async () => {
  await WishListItem.create({
    wishlistId: 1,
    productId: 1
  })
  await WishListItem.create({
    wishlistId: 1,
    productId: 2
  })
  await WishListItem.create({
    wishlistId: 1,
    productId: 3
  })
})

export default WishListItem
