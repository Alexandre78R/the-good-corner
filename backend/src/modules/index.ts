import { Router } from "express";
const router = Router();
import { router as adsRouter } from './ads';
import { router as categoriesRouter } from './categories';

router.use("/ads", adsRouter);
router.use("/categories", categoriesRouter);

export { router };
