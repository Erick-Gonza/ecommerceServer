import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../../config/database.js'

class State extends Model {}

State.init(
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
    modelName: 'State',
    timestamps: false
  }
)

State.afterSync(async () => {
  await State.create({
    name: 'Change'
  })
  await State.create({
    name: 'Nuevo Leon',
    countryId: 2
  })
  await State.create({
    name: 'CDMX',
    countryId: 2 
  })
  await State.create({
    name: 'Tamaulipas',
    countryId: 2
  })
  await State.create({
    name: 'California',
    countryId: 3
  })
  await State.create({
    name: 'Arizona',
    countryId: 3
  })
  await State.create({
    name: 'Texas',
    countryId: 3
  })
  await State.create({
    name: 'Sao Paulo',
    countryId: 4
  })
  await State.create({
    name: 'Argentina',
    countryId: 5
  })
})

export default State
