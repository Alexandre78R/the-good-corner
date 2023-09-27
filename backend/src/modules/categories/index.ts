import { Router } from "express";
const router = Router();
import {
    getAllCategories,
    postAdCategories,
    // deleteAd,
    // updateAdController
} from './controller'
import { validateAddCategories } from "./validator";

router.get('/', getAllCategories);
router.post('/', postAdCategories);

export { router };