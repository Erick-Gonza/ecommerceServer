import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Address extends Model {}

Address.init(
  {
    //id
    //idUser fk
    street: {
      type: Dt.STRING,
    },
    city: {
      type: Dt.STRING,
    },
    state: {
      type: Dt.STRING,
    },
    postalCode: {
      type: Dt.INTEGER,
    },
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'Address',
  }
)
export default Address
