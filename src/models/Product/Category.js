import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Category extends Model {}

Category.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize: db,
    modelName: 'Category'
  }
)

export default Category
