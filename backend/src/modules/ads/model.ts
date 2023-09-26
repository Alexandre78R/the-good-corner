// import { db } from "../../config/database";
import db  from "../../config/database";
// import { Ad } from "./types";
import { Ad } from "../../entities/ad";

const findAllAds = (): Promise<Ad[]> => {
  return new Promise<Ad[]> ( async (resolve, reject) => {
    try {
      // db.all("SELECT * FROM ad", (err, rows) => {
      //   if (err) {
      //     console.error("Erreur lors de la récupération des annonces :", err);
      //     reject(err);
      //   } else {
      //     const ads: Ad[] = rows as Ad[];
      //     resolve(ads);
      //   }
      // });
      const adsList: Ad[] = await Ad.find()
      resolve(adsList)
    } catch (err) {
      console.error("err", err);
      reject(err);
    }
  });
};

//   const findByIDAds = (id: number) => {
//     return new Promise<Ad[]>(async (resolve, reject) => {
//       try {
//         db.all("SELECT * FROM ad WHERE id =  ?", [id],  (err, rows) => {
//           if (err) {
//             console.error("Erreur lors de la récupération des annonces :", err);
//             reject(err);
//           } else {
//             const ad: Ad[] = rows as Ad[];
//             resolve(ad);
//           }
//         });
//       } catch (err) {
//         console.error("err", err);
//         reject(err);
//       }
//     });
//   };

// const createAd = async (ad: Ad) => {
//     console.log("ad", ad)
//     return new Promise<Ad[]>(async (resolve, reject) => {
//       try {
//           db.run(
//               'INSERT INTO ad (title, owner, description, price, picture, location, createdAt, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
//               [
//                 ad.title,
//                 ad.owner,
//                 ad.description,
//                 ad.price,
//                 ad.picture,
//                 ad.location,
//                 ad.createdAt,
//                 ad.category_id,
//               ],
//               function (err: any) {
//                 if (err) {
//                   console.error('Erreur lors de l\'insertion de l\'annonce :', err);
//                   reject(err);
//                 }
//                 console.log('Nouvelle annonce insérée avec succès. ID:');
//                 resolve([ad])
//               }
//           );
//       } catch (err) {
//           console.error("err", err);
//       }
//     })
// }

// const deleteBDDAd = async (id: number) => {
//   return new Promise<boolean>((resolve, reject) => {
//     db.run("DELETE FROM ad WHERE id = ?", [id], (err: any) => {
//       if (err) {
//         console.error('Erreur lors de la suppression de l\'annonce :', err);
//         reject(err);
//       } else {
//         console.log('Annonce supprimée avec succès. ID:', id);
//         resolve(true);
//       }
//     });
//   });
// };

// const updateBDDAd = async (sqlUpdate: string, params: string[]) => {
//   return new Promise<boolean>((resolve, reject) => {
//     db.run(sqlUpdate, params, (err: any) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(true);
//       }
//     });
//   });
// };

// export { findAllAds , createAd, findByIDAds, deleteBDDAd, updateBDDAd }; 
export { findAllAds }; 