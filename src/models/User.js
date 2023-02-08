import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class User extends Model{}

User.init({
    email: {
        type:Dt.STRING
    },
    firstName: {
        type: Dt.STRING
    },
    lastName: {
        type: Dt.STRING
    },
    phoneNumber: {
        type: Dt.STRING
    },
    birthDate: {
        type: Dt.DATE
    } //id pk
},{
    sequelize: db,
    modelName:"User"
});

export default User;