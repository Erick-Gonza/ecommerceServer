import { DataTypes as Dt, Model } from 'sequelize'
import db from '../config/database.js'

class Category extends Model {}
// parametros tabla
// parametros conexion db y table name
Category.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
    },
    description: {
      type: Dt.STRING,
    },
    //ID
  },
  {
    sequelize: db,
    modelName: 'Category',
  }
)

export default Category
