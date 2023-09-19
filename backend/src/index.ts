import express, { Request, Response } from "express";
import { Ad } from "./types";
import { app } from "./config/server";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Serveur open PORT :", port)
});


// const app = express();
// app.use(express.json());
// const port = 3000;

// let ads: Ad [] = [
//     {
//       id: 1,
//       title: "Bike to sell",
//       description:
//         "My bike is blue, working fine. I'm selling it because I've got a new one",
//       owner: "bike.seller@gmail.com",
//       price: 100,
//       picture:
//         "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
//       location: "Paris",
//       createdAt: "2023-09-05T10:13:14.755Z",
//     },
//     {
//       id: 2,
//       title: "Car to sell",
//       description:
//         "My car is blue, working fine. I'm selling it because I've got a new one",
//       owner: "car.seller@gmail.com",
//       price: 10000,
//       picture:
//         "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
//       location: "Paris",
//       createdAt: "2023-10-05T10:14:15.922Z",
//     },
//   ];

// app.get("/", (req: Request, res: Response) => {
//     res.send("Hello World!");
// });
  
// app.get("/ads", (req: Request, res: Response) => {
//     res.send(ads);
// });

// app.get("/ad/:id", (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     const ad = ads.find((ad) => ad.id === id);
//     if (!ad) {
//       res.sendStatus(404);
//     }
//     res.json({ ad });
//  });

  
// app.post("/ad", (req: Request, res: Response) => {
//     console.log("req.body", req.body)
//     const id = ads.length + 1;
//     const newAd: Ad = {
//       ...req.body,
//       id,
//       createdAt: new Date().toISOString(),
//     };
//     ads = [...ads, newAd];
  
//     res.send(newAd);
// });
