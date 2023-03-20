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
    cityId:{
      type:Dt.INTEGER
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

Address.afterSync(async () => {
  await Address.create({
    street: 'street 1',
    stateId: 1,
    zipCode: 64100,
    countryId: 1,
    cityId:1,
    userId: 1
  })
  await Address.create({
    street: 'street 2',
    stateId: 2,
    zipCode: 64100,
    countryId: 1,
    cityId:2,
    userId: 1
  })
})
export default Address
