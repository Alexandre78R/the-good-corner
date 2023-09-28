import { Router } from "express";
const router = Router();
import {
    getAllAds,
    getAd,
    getAdCategorie,
    postAd,
    deleteAd,
    updateAdController
} from './controller'
import { validateAddAds } from "./validator";
import { createRequestSqlUpdate } from "../../midleware/createRequestSqlUpdate";

router.get('/', getAllAds);
router.get('/:id', getAd);
router.get('/listbycategory/:id', getAdCategorie);
router.post('/', validateAddAds, postAd);
router.delete('/:id', deleteAd);
router.patch('/:id', createRequestSqlUpdate, updateAdController );

export { router };