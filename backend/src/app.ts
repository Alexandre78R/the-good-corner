import "reflect-metadata";
import { Request, Response } from "express";
import { app } from "./config/server";
import db from "./config/database"

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("*", (req: Request, res: Response) => {
    res.redirect('/')
});

app.listen(port, async () => {
    await db.initialize();
    console.log("Serveur open PORT :", port)
});

export { app }
