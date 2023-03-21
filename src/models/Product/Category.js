import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Category extends Model {}

Category.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
      unique: true
    }
    // idSubCategory: {
    //     type: Dt.STRING,
    // },
    // FIX FOREIGN KEYS, DOES NOT SHOW THE RIGHT FK, IT SHOULD BE SUBCATEGORYID
    // idSubcategory fk
    // CreationDate
    // updateDate
  },
  {
    sequelize: db,
    modelName: 'Category'
  }
)

Category.afterSync(async () => {
  await Category.create({
    name: 'Category 1',
    subcategoryId: 1
  })
  await Category.create({
    name: 'Category 2',
    subcategoryId: 2
  })
  await Category.create({
    name: 'Category 3',
    subcategoryId: 3
  })
})

export default Category
