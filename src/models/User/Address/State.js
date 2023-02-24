import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../../config/database.js'

class State extends Model {}

State.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Dt.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'State',
    timestamps: false,
  }
)

State.afterSync(async () => {
  await State.create({
    name: 'Nuevo Leon',
  })
  await State.create({
    name: 'CDMX',
  })
  await State.create({
    name: 'Tamaulipas',
  })
})

export default State
