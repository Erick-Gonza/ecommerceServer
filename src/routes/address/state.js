import { Router } from "express";
import { getStateById } from "../../controllers/Address/state.js";
import { getAllState } from "../../controllers/Address/state.js";


const stateRouter = Router()
stateRouter.get('/:countryId', getAllState)
stateRouter.get('/state/:stateId', getStateById)

export{ stateRouter }