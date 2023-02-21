import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Category extends Model {}

Category.init(
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
  },

  {
    sequelize: db,
    modelName: 'Category',
  }
)

export default Category
