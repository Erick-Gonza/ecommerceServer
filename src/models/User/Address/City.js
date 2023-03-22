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

export default City
