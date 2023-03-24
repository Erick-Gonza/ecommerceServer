import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Status extends Model {}

Status.init(
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
    modelName: 'Status',
    timestamps: false
  }
)

export default Status
