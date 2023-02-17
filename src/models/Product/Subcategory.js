import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Subcategory extends Model {}
// parametros tabla
// parametros conexion db y table name
Subcategory.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
    },
    description: {
      type: Dt.STRING,
    },
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'Subcategory',
  }
)

export default Subcategory
