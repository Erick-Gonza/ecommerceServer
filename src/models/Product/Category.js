import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Category extends Model {}

Category.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
    },
    description: {
      type: Dt.STRING,
    },
    //FIX FOREIGN KEYS, DOES NOT SHOW THE RIGHT FK, IT SHOULD BE SUBCATEGORYID
    //idSubcategory fk
    //CreationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'Category',
  }
)

Category.afterSync(async () => {
  await Category.create({
    name: 'Product 1',
    description: 'description 1',
    // subcategoryId: 1,
  })
  await Category.create({
    name: 'Product 2',
    description: 'description 2',
    // subcategoryId: 2,
  })
})

export default Category
