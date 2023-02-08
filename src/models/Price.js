import { DataTypes as Dt, Model } from 'sequelize'
import db from '../config/database.js'

class Price extends Model {}

Price.init(
  {
    //id
    price: {
      type: Dt.DECIMAL,
    },
    referencePrice: {
      type: Dt.DECIMAL,
    },
    isAnOffert: {
      type: Dt.BOOLEAN,
    },
  },
  {
    sequelize: db,
    modelName: 'Price',
  }
)

export default Price
