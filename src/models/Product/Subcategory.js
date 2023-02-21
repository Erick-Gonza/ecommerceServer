import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Subcategory extends Model {}

Subcategory.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Dt.STRING,
      allowNull: false,
    },
    description: {
      type: Dt.STRING,
    },
    // categoryId: {
    //   type: Dt.INTEGER,
    // },
  },
  {
    sequelize: db,
    modelName: 'Subcategory',
  }
)

export default Subcategory
