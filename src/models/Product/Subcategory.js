import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Subcategory extends Model {}

Subcategory.init(
  {
    name: {
      type: Dt.STRING,
      allowNull: false,
    },
    description: {
      type: Dt.STRING,
    },
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'Subcategory',
  }
)

Subcategory.afterSync(async () => {
  await Subcategory.create({
    name: 'Product 1',
    description: 'description 1',
    categoryId: 1,
  })
  await Subcategory.create({
    name: 'Product 2',
    description: 'description 2',
    categoryId: 2,
  })
})

export default Subcategory
