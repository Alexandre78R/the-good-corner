import { Router } from "express";
const router = Router();
import {
    getAllAds,
    getByIdAds,
    postAd,
    deleteAd,
    updateAdController
} from './controller'
import { validateAddAds } from "./validator";

router.get('/', getAllAds);
router.get('/:id', getByIdAds);
router.post('/', validateAddAds, postAd);
router.delete('/:id', deleteAd);
router.patch('/:id', updateAdController);

export { router };