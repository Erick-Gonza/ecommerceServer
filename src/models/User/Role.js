import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Role extends Model {}

Role.init(
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
    modelName: 'Role',
    timestamps: false
  }
)

export default Role
