import { Router } from "express";
import { getCityById } from "../../controllers/Address/city.js";
import { getAllCity } from "../../controllers/Address/city.js";

const cityRouter = Router()

cityRouter.get('/:stateId', getAllCity)
cityRouter.get('/city/:cityId', getCityById)

export { cityRouter }