import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Role extends Model {}

Role.init(
  {
    //id
    name: {
      type: Dt.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'Role',
  }
)

Role.afterSync(async () => {
  await Role.create({ name: 'admin' })
})

export default Role
