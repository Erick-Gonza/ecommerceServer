import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class Order extends Model{}

Order.init({
    //id
    creationDate: {
        type: Dt.DATE
    },
    //user id
    //order item id
},{
    sequelize: db,
    modelName:"Order"
});

export default Order;