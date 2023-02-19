import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Product extends Model {}

Product.init(
  {
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
    //disscount
    stock: {
      type: Dt.INTEGER,
    },
    imageUrl: {
      type: Dt.STRING,
    },
    //idCategory fk
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'Product',
  }
)

export default Product
