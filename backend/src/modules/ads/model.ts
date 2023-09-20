import { db } from "../../config/database";
import { Ad } from "./types";

const findAllAds = (): Promise<Ad[]> => {
  return new Promise<Ad[]>((resolve, reject) => {
    try {
      db.all("SELECT * FROM ad", (err, rows) => {
        if (err) {
          console.error("Erreur lors de la récupération des annonces :", err);
          reject(err);
        } else {
          const ads: Ad[] = rows as Ad[];
          resolve(ads);
        }
      });
    } catch (err) {
      console.error("err", err);
      reject(err);
    }
  });
};

  const findByIDAds = (id: Number) => {
    return new Promise<Ad[]>(async (resolve, reject) => {
      try {
        db.all("SELECT * FROM ad WHERE id =  ?", [id],  (err, rows) => {
          if (err) {
            console.error("Erreur lors de la récupération des annonces :", err);
            reject(err);
          } else {
            const ad: Ad[] = rows as Ad[];
            resolve(ad);
          }
        });
      } catch (err) {
        console.error("err", err);
        reject(err);
      }
    });
  };

const createAd = async (ad: Ad) => {
    console.log("ad", ad)
    try {
        db.run(
            'INSERT INTO ad (title, owner, description, price, picture, location, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
              ad.title,
              ad.owner,
              ad.description,
              ad.price,
              ad.picture,
              ad.location,
              ad.createdAt,
            ],
            function (err: any) {
              if (err) {
                console.error('Erreur lors de l\'insertion de l\'annonce :', err);
                throw err;
              }
              console.log('Nouvelle annonce insérée avec succès. ID:');
            }
        );
    } catch (err) {
        console.error("err", err);
    }
}

const deleteBDDAd = async (id: number) => {
  return new Promise<boolean>((resolve, reject) => {
    db.run("DELETE FROM ad WHERE id = ?", [id], (err: any) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'annonce :', err);
        reject(err);
      } else {
        console.log('Annonce supprimée avec succès. ID:', id);
        resolve(true); // Renvoie true pour indiquer que la suppression a réussi
      }
    });
  });
};

// server.put("/ads/:id", (request, response) => {
//     const _id = parseInt(request.params.id);
//     const updatedAd = request.body;
  
//     // Vérifier si l'objet updatedAd est vide
//     if (Object.keys(updatedAd).length === 0) {
//       return response.sendStatus(204); // Aucune mise à jour nécessaire
//     }
  
//     const params = [];
//     const columnsToUpdate = Object.entries(updatedAd).map(([key, value]) => {
//       params.push(value);
//       return `${key} = ?`;
//     });
  
//     // Générer la clause SQL pour la mise à jour
//     const sqlUpdate = `UPDATE Ad SET ${columnsToUpdate.join(", ")} WHERE id = ?`;
//     params.push(_id);
  
//     db.run(sqlUpdate, params, function (err) {
//       if (err) {
//         console.error(err);
//         return response.status(400).send(err.message);
//       }
//       return response.sendStatus(204);
//     });
//   });

export { findAllAds , createAd, findByIDAds, deleteBDDAd }; 