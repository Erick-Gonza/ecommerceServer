import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class User extends Model {}

User.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Dt.STRING,
    },
    lastName: {
      type: Dt.STRING,
    },
    userName: {
      type: Dt.STRING,
      unique: true,
    },
    email: {
      type: Dt.STRING,
    },
    password: {
      type: Dt.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'User',
  }
)
// TODO: Add password encryption, and add a beforeCreate and beforeUpdate hook
// User.beforeCreate(async (user) => {
//   const salt = await bcrypt.genSalt(10)
//   user.password = await bcrypt.hash(user.password, salt)
// })

// User.beforeUpdate(async (user) => {
//   const salt = await bcrypt.genSalt(10)
//   user.password = await bcrypt.hash(user.password, salt)
// })

User.afterSync(async () => {
  await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    userName: 'Admin',
    email: 'Admin@test.com',
    password: 'Admin',
    roleId: 1,
    statusId: 1,
  })
})

export default User
