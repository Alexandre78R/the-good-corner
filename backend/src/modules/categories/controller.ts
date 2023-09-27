import { Request, Response } from "express";

import {
    findAllCategories,
    createCategories,
} from "./model"

const getAllCategories = async (req: Request, res: Response) => {
  const { tagIds } = req.query;
  try {
      const dataAllCategories = await findAllCategories(tagIds); 
      res.send(dataAllCategories);
  } catch (err: any) {
      console.log('err', err);
      res.status(500).json({error : err.message});
  }
}

const postCategories = async (req: Request, res: Response) => {
  try {
    const newAd = await createCategories(req.body);
    if(!newAd) return res.sendStatus(500).send("Error interne add Categorie !");
    res.status(201).json({newAd});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export {
    getAllCategories,
    postCategories,
}