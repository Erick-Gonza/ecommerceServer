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
    name: 'Sub category 1',
    categoryId: 1,
  })
  await Subcategory.create({
    name: 'Sub category 2',
    description: 'description 2',
    categoryId: 2,
  })
  await Subcategory.create({
    name: 'Sub category 3',
    description: 'description 3',
    categoryId: 3,
  })
})

export default Subcategory
