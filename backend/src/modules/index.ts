import { Router } from "express";
const router = Router();
import { router as absRouter } from './ads';

router.use("/abs", absRouter);

export { router };
