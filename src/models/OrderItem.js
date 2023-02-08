import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class OrderItem extends Model{}

OrderItem.init({
    //id
    //price
    //product id
    quantity: {
        type: Dt.INTEGER
    }
},{
    sequelize: db,
    modelName:"OrderItem"
});

export default OrderItem;