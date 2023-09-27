// import { Ad } from "../../entities/ad.entity";
// import { In } from "typeorm";
// import { validate } from "class-validator";

// const findAllAds = async (tagIds : any) => {
//   return new Promise<Ad[]> ( async (resolve, reject) => {
//     try {
//       const ads = await Ad.find({
//         relations: {
//           category: true,
//           tags: true,
//         },
//         where: {
//           tags: {
//             id:
//               typeof tagIds === "string" && tagIds.length > 0
//                 ? In(tagIds.split(",").map((t) => parseInt(t, 10)))
//                 : undefined,
//           },
//         },
//       });
//       resolve(ads)
//     } catch (err) {
//       console.error("err", err);
//     }
//   });
// };

// const createAd = async (ad: Ad) => {
//   return new Promise<Ad>(async (resolve, reject) => {
//     try {
//       const newAd = Ad.create(ad);
//       const errors = await validate(newAd);
//       if (errors.length !== 0) return reject(errors);
//       const newAdWithId = await newAd.save();
//       resolve(newAdWithId);
//     } catch (err) {
//       console.error("err", err);
//     }
//   })
// }

// const deleteBDDAd = async (id: number) => {
//   return new Promise<boolean>(async (resolve, reject) => {
//     try {
//       const adToDelete = await Ad.findOneBy({ id: id });
//       if (!adToDelete) return reject("error Ad Not found");
//       await adToDelete.remove();
//       resolve(true)
//     } catch (err) {
//       console.log(err);
//     }
//   });
// };

// const updateBDDAd = async (sqlUpdate: string, params: string[], body: Ad) => {
//   return new Promise<Ad>(async (resolve, reject) => {
//     try {
//       const idUp = parseInt(params[params.length-1]);
//       const adToUpdate = await Ad.findOneBy({ id: idUp });
//       if (!adToUpdate) return reject("error Ad Not found");

//       await Ad.merge(adToUpdate, body);
//       const errors = await validate(adToUpdate);
//       if (errors.length !== 0) reject(errors);

//       resolve(await adToUpdate.save())
//     } catch (err) {
//       console.log(err);
//     }
//   });
// };

// export { 
  // findAllAds,
  // createAd,
  // deleteBDDAd,
  // updateBDDAd
// }; 
