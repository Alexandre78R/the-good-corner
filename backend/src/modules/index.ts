import { Router } from "express";
const router = Router();
import { router as adsRouter } from './ads';
import { router as categoriesRouter } from './categories';
import { router as tagsRouter } from './tags';

router.use("/ads", adsRouter);
router.use("/categories", categoriesRouter);
router.use("/tags", tagsRouter);

export { router };
