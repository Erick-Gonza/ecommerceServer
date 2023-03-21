import { where } from "sequelize"
import { City} from "../../models/index.js"

const getAllCity = async (req,res)=>{
    try{
    const {stateId} = req.params
    const cities = await City.findAll({where: {stateId}})
    cities.length === 0
      ? res.status(400).send({
        message: 'No cities found',
        success: false
      })
      : res.status(200).send({
        message: 'Get all cities',
        success: true,
        cities
      })
    }
    catch(error){
     res.status(400).send({ message: error, success: false })   
    }
}

export {
    getAllCity
}