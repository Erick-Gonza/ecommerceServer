import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'
import Category from './Category.js'

class Product extends Model {}

Product.init(
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
    price: {
      type: Dt.DECIMAL,
    },
    stock: {
      type: Dt.INTEGER,
    },
    imageUrl: {
      type: Dt.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'Product',
  }
)

export default Product
