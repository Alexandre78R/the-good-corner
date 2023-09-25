import { Request, Response } from "express";
import { ads, addAd, updateAd } from "./ads";
import { Ad, CustomRequestUpdate } from "./types";
import {
    findAllAds,
    // createAd,
    // findByIDAds,
    // deleteBDDAd,
    // updateBDDAd, 
} from "./model"

const getAllAds = async (req: Request, res: Response) => {
    try {
        const dataAllAds: Ad[] = await findAllAds(); 
        res.send(dataAllAds);
    } catch (err: any) {
        console.log('err', err);
        res.status(500).json({error : err.message});
    }
}

// const getByIdAds = async (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     // const ad = ads.find((ad) => ad.id === id);
//     try {
//         // if (!ad) {
//         //     res.sendStatus(404);
//         // }
//         const dataByIDAd: Ad[] = await findByIDAds(id);
//         res.json({ dataByIDAd });
//     } catch (err: any) {
//         console.log('err', err);
//         res.status(500).json({error : err.message});
//     }
// }

// const postAd = async (req: Request, res: Response) => {
//     const id: number = ads.length + 1;
//     try {
//         const newAd: Ad = {
//             ...req.body,
//             id,
//             createdAt: new Date().toISOString(),
//         };
//         // addAd(newAd);
//         const dataNewAd = await createAd(newAd)
//         res.send(dataNewAd);
//     } catch (err: any) {
//         console.log('err', err);
//         res.status(500).json({error : err.message});
//     }
// }

// const deleteAd = async (req: Request, res: Response) => {
//     const idOfAdToDelete: number = parseInt(req.params.id, 10)
//     try {
//         // const adIndex = ads.findIndex((ad) => ad.id === idOfAdToDelete);
//         // if (adIndex === -1) return res.sendStatus(404);

//         // ads.splice(adIndex, 1);
//         const dataByIDAd: Ad[] = await findByIDAds(idOfAdToDelete);
//         if (dataByIDAd.length === 0) return res.status(404).json({ message: "Not Found AD"});

//         const deleteSuccess: boolean = await deleteBDDAd(idOfAdToDelete);

//         if (deleteSuccess) {
//           res.status(204).json({ message: "ad deleted successfully!" });
//         } else {
//           res.status(500).json({ message: "Failed to delete ad" });
//         }
//     } catch (err: any) {
//         console.log('err', err);
//         res.status(500).json({ error: err.message });
//     }
// }

// const updateAdController = async (req: CustomRequestUpdate, res: Response) => {
//     const idOfAdToUpdate: number = parseInt(req.params.id, 10);
//     const sqlUpdate = req.sqlUpdate;
//     const sqlParams = req.sqlParams;

//     try {
//         // const adToUpdate = ads.find((ad) => ad.id === idOfAdToUpdate);
//         // if (!adToUpdate) return res.sendStatus(404);

//         // const updateSuccessful = updateAd(idOfAdToUpdate, req.body);

//         // if (updateSuccessful) {
//         //     res.send(ads.find((ad) => ad.id === idOfAdToUpdate));
//         // } else {
//         //     res.status(500).json({ error: "Failed to update ad" });
//         // }
//         if (!sqlUpdate) return res.status(500).json({ err : "internne SQLUPDATE !"});
//         if (!sqlParams) return res.status(500).json({ err : "internne sqlParams !"});
        
//         const modifyAd = await updateBDDAd(sqlUpdate, sqlParams);
//         if (!modifyAd) return res.status(500).json({ message: "Failed to update ad" });
        
//         res.status(201).json({ message : "Update OK"})
//     } catch (err: any) {
//         console.log('err', err);
//         res.status(500).json({ error: err.message });
//     }
// }

export {
    getAllAds,
    // getByIdAds,
    // postAd,
    // deleteAd,
    // updateAdController,
}