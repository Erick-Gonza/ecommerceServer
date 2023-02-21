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
    },
    email: {
      type: Dt.STRING,
    },
    password: {
      type: Dt.STRING,
    },
    roleId: {
      type: Dt.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    statusId: {
      type: Dt.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'User',
  }
)

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
  await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    userName: 'Admin',
    email: 'Admin@test.com',
    password: 'Admin',
    roleId: 2,
    statusId: 2,
  })
})

export default User
