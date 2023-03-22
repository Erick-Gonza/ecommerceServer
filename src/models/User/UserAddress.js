import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class UserAddress extends Model {}

UserAddress.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Dt.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    addressId: {
      type: Dt.INTEGER,
      references: {
        model: 'Address',
        key: 'id'
      }
    }
  },
  {
    sequelize: db,
    modelName: 'UserAddress'
  }
)

export default UserAddress
