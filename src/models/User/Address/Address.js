import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../../config/database.js'

class Address extends Model {}

Address.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    street: {
      type: Dt.STRING
    },
    stateId: {
      type: Dt.INTEGER
    },
    zipCode: {
      type: Dt.INTEGER
    },
    countryId: {
      type: Dt.INTEGER
    },
    cityId: {
      type: Dt.INTEGER
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
    modelName: 'Address',
    timestamps: false
  }
)

export default Address
