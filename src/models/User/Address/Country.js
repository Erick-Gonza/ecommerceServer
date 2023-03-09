import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../../config/database.js'

class Country extends Model {}

Country.init(
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
    modelName: 'Country',
    timestamps: false
  }
)

Country.afterSync(async () => {
  await Country.create({
    name: 'Monterrey'
  })
  await Country.create({
    name: 'Guadalupe'
  })
  await Country.create({
    name: 'Reynosa'
  })
  await Country.create({
    name: 'Mier'
  })
})

export default Country
