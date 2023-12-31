import { Request, Response } from "express";
import { Ad } from "./entity";
import { CustomRequestUpdate } from "./types";
import {
    findAllAds,
    findAd,
    findAdCategory,
    createAd,
    deleteBDDAd,
    updateBDDAd,
} from "./model"

const getAllAds = async (req: Request, res: Response) => {
  const { tagIds } = req.query;
  try {
      const dataAllAds: Ad[] = await findAllAds(tagIds); 
      res.send(dataAllAds);
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({error : err.message});
  }
}

const getAd = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
      const dataAd: Ad[] = await findAd(+id); 
      if (dataAd.length === 0) return res.status(404).send("Not Found announce");
      res.send(dataAd);
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({error : err.message});
  }
}

const getAdCategorie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
      const dataAllAdsCategorie: Ad[] = await findAdCategory(+id); 
      if (dataAllAdsCategorie.length === 0) return res.status(404).send("Not Found category");
      res.send(dataAllAdsCategorie);
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({error : err.message});
  }
}

const postAd = async (req: Request, res: Response) => {
  try {
    const newAd = await createAd(req.body);
    if(!newAd) return res.sendStatus(500).send("Error interne add AD !");
    res.status(201).json(newAd);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const deleteAd = async (req: Request, res: Response) => {
  const idOfAdToDelete: number = parseInt(req.params.id, 10)
  try {
    const deleteSuccess: Ad = await deleteBDDAd(idOfAdToDelete);
    if (!deleteSuccess) return res.status(500).json({ message: "Failed to delete ad" });
    res.status(204).json({ message: "ad deleted successfully!" });
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({ error: err.message });
  }
}

const updateAdController = async (req: CustomRequestUpdate, res: Response) => {
  const sqlUpdate = req.sqlUpdate;
  const sqlParams = req.sqlParams;
  console.log("totoo")
  try {
    if (!sqlUpdate) return res.status(500).json({ err : "internne sqlUpdate !"});
    if (!sqlParams) return res.status(500).json({ err : "internne sqlParams !"});
    
    const modifyAd = await updateBDDAd(sqlUpdate, sqlParams, req.body);
    if (!modifyAd) return res.status(500).json({ message: "Failed to update ad" });
    
    res.status(201).json({ message : "Update OK"})
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({ error: err.message });
  }
}

export {
    getAllAds,
    getAd,
    getAdCategorie,
    postAd,
    deleteAd,
    updateAdController,
}