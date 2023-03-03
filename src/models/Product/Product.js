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
    price: 100,
  })
  await Product.create({
    name: 'product 2',
    description: 'description 2',
    categoryId: 2,
    price: 200,
  })
  await Product.create({
    name: 'product 3',
    description: 'description 3',
    categoryId: 3,
    price: 100,
  })
  await Product.create({
    name: 'product 4',
    description: 'description 4',
    categoryId: 3,
    price: 100,
  })
  await Product.create({
    name: 'product 5',
    description: 'description 5',
    categoryId: 3,
    price: 100,
  })
})

export default Product
