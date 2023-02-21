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
    //discount
    stock: {
      type: Dt.INTEGER,
    },
    imageUrl: {
      type: Dt.STRING,
    },

    //FIX FOREIGN KEYS, IT SHOULD BE CATEGORYID, NOT SUBCATEGORYID
    //idCategory fk
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'Product',
  }
)

Product.afterSync(async () => {
  await Product.create({
    name: 'Product 1',
    description: 'description 1',
    price: 100,
    stock: 100,
    imageUrl: 'test',
    subcategoryId: 1,
  })
  await Product.create({
    name: 'Product 2',
    description: 'description 2',
    price: 200,
    stock: 100,
    imageUrl: 'test',
    subcategoryId: 2,
  })
})

export default Product
