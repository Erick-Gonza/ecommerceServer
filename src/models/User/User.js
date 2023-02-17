import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class User extends Model {}

User.init(
  {
    firstName: {
      type: Dt.STRING,
    },
    lastName: {
      type: Dt.STRING,
    },
    username: {
      type: Dt.STRING,
    },
    email: {
      type: Dt.STRING,
    },
    //password
    //role fk
    //isActive fk
    //creationDate
    //updateDate
  },
  {
    sequelize: db,
    modelName: 'User',
  }
)

export default User
