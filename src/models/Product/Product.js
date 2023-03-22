import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Product extends Model {}

Product.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Dt.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: Dt.STRING
    },
    price: {
      type: Dt.DOUBLE
    },
    stock: {
      type: Dt.INTEGER
    },
    imageUrl: {
      type: Dt.TEXT
    },
    color: {
      type: Dt.STRING
    }
  },
  {
    sequelize: db,
    modelName: 'Product'
  }
)

export default Product
