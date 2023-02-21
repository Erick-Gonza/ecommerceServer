import { DataTypes as Dt, Model } from 'sequelize'
import db from '../../config/database.js'

class Address extends Model {}

Address.init({
    id: {
        type: Dt.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    street: {
        type: Dt.STRING,
    },
    city: {
        type: Dt.STRING,
    },
    state: {
        type: Dt.STRING,
    },
    zipCode: {
        type: Dt.INTEGER,
    },
    country: {
        type: Dt.STRING,
    },
    UserId: {
        type: Dt.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
    },
    //creationDate
    //updateDate
}, {
    sequelize: db,
    modelName: 'Address',
    timestamps: false,
})

Address.afterSync(async() => {
    await Address.create({
        street: 'Street',
        city: 'City',
        state: 'State',
        zipCode: 'ZipCode',
        country: 'Country',
    })
})

export default Address