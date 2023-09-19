import { Request, Response } from "express";
import { ads, addAd } from "./ads";
import { Ad } from "./types";
// Pour les Request base de donnée
// import {} from "./model"

const getAllAds = async (req: Request, res: Response) => {
    try {
        res.send(ads);
    } catch (err: any) {
        console.log('err', err);
        res.status(500).json({error : err.message});
    }
}

const getByIdAds = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const ad = ads.find((ad) => ad.id === id);
    try {
        if (!ad) {
            res.sendStatus(404);
        }
        res.json({ ad });
    } catch (err: any) {
        console.log('err', err);
        res.status(500).json({error : err.message});
    }
}

const postAd = async (req: Request, res: Response) => {
    const id = ads.length + 1;
    try {
        const newAd: Ad = {
            ...req.body,
            id,
            createdAt: new Date().toISOString(),
          };
        addAd(newAd);
        res.send(newAd);
    } catch (err: any) {
        console.log('err', err);
        res.status(500).json({error : err.message});
    }
}

export {
    getAllAds,
    getByIdAds,
    postAd,
}