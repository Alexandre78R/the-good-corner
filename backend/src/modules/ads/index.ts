import { Router } from "express";
const router = Router();
import {
    getAllAds,
    getByIdAds,
    postAd,

} from './controller'
import { validateAddAds } from "./validator";

router.get('/', getAllAds);
router.get('/:id', getByIdAds);
router.post('/', validateAddAds, postAd);

export { router };