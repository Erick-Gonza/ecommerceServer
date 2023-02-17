import { DataTypes as Dt, Model } from 'sequelize'
import db from '../config/database.js'

class State extends Model {}

State.init(
{
    //id
    name: {
        type: Dt.STRING,
    }

},
{
    sequelize: db,
    modelName: 'State',
}
)
export default State