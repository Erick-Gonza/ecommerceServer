import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class SubCategory extends Model {}

SubCategory.init(
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
    modelName: 'SubCategory',
  }
)

SubCategory.afterSync(async () => {
  await SubCategory.create({
    name: 'Subcat 1',
    categoryId: 1,
    // subcategoryId: 1,
  })
  await SubCategory.create({
    name: 'subcat 2',
    description: 'description 2',
    categoryId: 1,
    // subcategoryId: 2,
  })
})

export default SubCategory
