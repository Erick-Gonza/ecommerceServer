import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../../config/database.js'

class Address extends Model {}

Address.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: Dt.STRING,
    },
    city: {
      type: Dt.STRING,
    },
    stateId: {
      type: Dt.INTEGER,
    },
    zipCode: {
      type: Dt.INTEGER,
    },
    countryId: {
      type: Dt.INTEGER,
    },
    userId: {
      type: Dt.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'Address',
    timestamps: false,
  }
)

Address.afterSync(async () => {
  await Address.create({
    street: 'street 1',
    city: 'Bogota',
    stateId: 'Estado',
    zipCode: 111111,
    countryId: 'Colombia',
    userId: 1,
  })
  await Address.create({
    street: 'street 2',
    city: 'Cartagena',
    stateId: 'Estado',
    zipCode: 222222,
    countryId: 'Colombia',
    userId: 1,
  })
})
export default Address
