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
    name: 'Change'
  })
  await Country.create({
    name: 'Mexico'
  })
  await Country.create({
    name: 'USA'
  })
  await Country.create({
    name: 'Brazil'
  })
  await Country.create({
    name: 'Argentina'
  })
})

export default Country
