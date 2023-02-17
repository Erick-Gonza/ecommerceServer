import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class WishList extends Model {}

WishList.init(
  {
    //id
    //idProduct fk
    //idUser fk
  },
  {
    sequelize: db,
    modelName: 'WishList',
  }
)

export default WishList
