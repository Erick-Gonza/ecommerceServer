import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../../config/database.js'

class Country extends Model {}

Country.init(
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
    modelName: 'Country',
    timestamps: false,
  }
)

export default Country
