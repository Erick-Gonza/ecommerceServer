import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class State extends Model {}

State.init(
  {
    //id
    name: {
      type: Dt.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'State',
  }
)

State.afterSync(async () => {
  await State.create({ name: 'active' })
})

export default State
