import { Router } from "express";
const router = Router();
import {
    getAllTags,
    postTags,
    deleteTags,
} from './controller'

// import { validateAddTags } from "./validator";

router.get('/', getAllTags);
router.post('/', postTags);
router.delete('/:id', deleteTags);

export { router };