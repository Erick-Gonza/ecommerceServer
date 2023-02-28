import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

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
Product.afterSync(async () => {
  await Product.create({
    name: 'product 1',
    categoryId: 1,
    // subcategoryId: 1,
  })
  await Product.create({
    name: 'product 2',
    description: 'description 2',
    subcategoryId: 1,
    // subcategoryId: 2,
  })
})

export default Product
