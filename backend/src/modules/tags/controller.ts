import { Request, Response } from "express";
import { IListTag } from "./types";
import {
    findAllTags,
    createTags,
    deleteBDDTags,
} from "./model"

const getAllTags = async (req: Request, res: Response) => {
  const { queryName } = req.query;
  console.log("queryName", queryName)
  try {
      const dataAllAds: IListTag[] = await findAllTags(queryName); 
      res.send(dataAllAds);
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({error : err.message});
  }
}

const postTags = async (req: Request, res: Response) => {
  try {
    const newAd = await createTags(req.body);
    if(!newAd) return res.sendStatus(500).send("Error interne add Tag !");
    res.status(201).json({newAd});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const deleteTags = async (req: Request, res: Response) => {
  const idOfAdToDelete: number = parseInt(req.params.id, 10)
  try {
    const deleteSuccess: boolean = await deleteBDDTags(idOfAdToDelete);
    if (!deleteSuccess) return res.status(500).json({ message: "Failed to delete Tag" });
    res.status(204).json({ message: "Tag deleted successfully !" });
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({ error: err.message });
  }
}

export {
    getAllTags,
    postTags,
    deleteTags,
}