import { Router } from "express";
const router = Router();
import {
    getAllCategories,
    postCategories,
} from './controller'
import { validateAddCategories } from "./validator";

router.get('/', getAllCategories);
router.post('/', postCategories);

export { router };