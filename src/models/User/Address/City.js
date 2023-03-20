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
    name: 'Monterrey'
  })
  await City.create({
    name: 'Guadalupe'
  })
  await City.create({
    name: 'Reynosa'
  })
  await City.create({
    name: 'Mier'
  })
})

export default City
