import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Category extends Model {}

Category.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    sequelize: db,
    modelName: 'Category'
  }
)

Category.afterSync(async () => {
  await Category.create({
    name: 'Tops',
    imageUrl: ''
  })
  await Category.create({
    name: 'Dresses',
  })
  await Category.create({
    name: 'Bottoms',
  })
  await Category.create({
    name: 'Outwear',
  })
  await Category.create({
    name: 'Shoes',
  })
  await Category.create({
    name: 'Accesories',
  })
})

export default Category
