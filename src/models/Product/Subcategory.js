import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Subcategory extends Model {}

Subcategory.init(
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
    // categoryId: {
    //   type: Dt.INTEGER,
    // },
  },
  {
    sequelize: db,
    modelName: 'Subcategory',
  }
)

Subcategory.afterSync(async () => {
  await Subcategory.create({
    name: 'Subcat 1',
    categoryId: 1,
    // SubcategoryId: 1,
  })
  await Subcategory.create({
    name: 'subcat 2',
    description: 'description 2',
    categoryId: 1,
    // SubcategoryId: 2,
  })
})

export default Subcategory
