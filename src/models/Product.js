import { DataTypes as Dt, Model } from 'sequelize'
import db from '../config/database.js'

class Product extends Model {}
// parametros tabla
// parametros conexion db y table name
Product.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
    },
    description: {
      type: Dt.STRING,
    },
    //price id
    //sub category id
    imageUrl: {
      type: Dt.STRING,
    },
    quantity: {
      type: Dt.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'Product',
  }
)

export default Product
