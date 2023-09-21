import { Request, Response } from "express";
import { app } from "./config/server";

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("*", (req: Request, res: Response) => {
    res.redirect('/')
});

app.listen(port, () => {
    console.log("Serveur open PORT :", port)
});

export { app }
