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
    userName: {
      type: Dt.STRING,
    },
    email: {
      type: Dt.STRING,
    },
    password: {
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

User.afterSync(async () => {
  await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    userName: 'janeDoe',
    email: 'test@test.com',
    password: 'testPassword',
    RoleId: 1,
    StateId: 1,
  })
  await User.create({
    firstName: 'Joe',
    lastName: 'Smith',
    userName: 'joeSmith',
    email: 'test@test.com',
    password: 'testPassword',
    RoleId: 2,
    StateId: 2,
  })
  await User.create({
    firstName: 'Joan',
    lastName: 'Samson',
    userName: 'joanSamson',
    email: 'test@test.com',
    password: 'testPassword',
    RoleId: 2,
    StateId: 1,
  })
})

export default User
