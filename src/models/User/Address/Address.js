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
    zipCode: {
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
    zipCode: 111111,
    userId: 1,
  })
  await Address.create({
    street: 'street 2',
    city: 'Cartagena',
    zipCode: 222222,
    userId: 1,
  })
})
export default Address
