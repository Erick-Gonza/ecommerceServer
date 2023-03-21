import { Router } from "express";
import { getAllCountry } from "../../controllers/Address/country.js";

const countryRouter = Router()

countryRouter.get('/', getAllCountry)

export {countryRouter}