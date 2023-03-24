import { DataTypes as Dt, Model } from 'sequelize'
import { hashBcrypt } from '../../config/authToken.js'
import db from '../../config/database.js'

class User extends Model {}

User.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Dt.STRING
    },
    lastName: {
      type: Dt.STRING
    },
    userName: {
      type: Dt.STRING,
      unique: true
    },
    email: {
      type: Dt.STRING
    },
    password: {
      type: Dt.STRING
    }
  },
  {
    sequelize: db,
    modelName: 'User'
  }
)
User.beforeCreate(async (user) => {
  // create a hash of the password
  const hash = await hashBcrypt(user.password, 10)
  // replace the password with the hash
  user.password = hash
})

export default User
