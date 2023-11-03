import express from "express";
import cors from "cors";
const app = express();
import { router as moduleRouter } from "../modules/index";

app.use(express.json());
app.use(cors());
app.use('/api', moduleRouter);

export { app };