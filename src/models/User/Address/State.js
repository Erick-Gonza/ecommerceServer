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

export default State
