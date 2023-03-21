import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../../config/database.js'

class City extends Model {}

City.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Dt.STRING
    }
  },
  {
    sequelize: db,
    modelName: 'City',
    timestamps: false
  }
)

City.afterSync(async () => {
    await City.create({
        name: 'Change'
      })
  await City.create({
    name: 'Monterrey',
    stateId: 2
  })
  await City.create({
    name: 'Guadalupe',
    stateId: 2
  })
  await City.create({
    name: 'San Nicolas',
    stateId: 2
  })
  await City.create({
    name: 'Los Angeles',
    stateId: 5
  })
  await City.create({
    name: 'Sao Paulo',
    stateId: 8
  })
  await City.create({
    name: 'La Plata',
    stateId: 9
  })
})

export default City
