import { Router } from "express";
import { getAllState } from "../../controllers/Address/state.js";


const stateRouter = Router()
stateRouter.get('/:countryId', getAllState)

export{ stateRouter }