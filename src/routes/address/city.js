import { Router } from "express";
import { getAllCity } from "../../controllers/Address/city.js";

const cityRouter = Router()

cityRouter.get('/:stateId', getAllCity)

export { cityRouter }