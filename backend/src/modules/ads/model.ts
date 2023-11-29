import { Category } from "../categories/entity";
import { Ad } from "./entity";
import AdsService from "./service";

const findAllAds = async (tagIds? : any) => {
  return new Promise<any> ( async (resolve, reject) => {
    try {
      const ads = await new AdsService().list(tagIds ? (tagIds as string) : "");
      resolve(ads)
    } catch (err) {
      console.error("err", err);
      reject(err)
    }
  });
};

const findAd = async (id : number) => {
  return new Promise<any> ( async (resolve, reject) => {
    try {
      const ad = await new AdsService().find(id);
      resolve(ad)
    } catch (err) {
      console.error("err", err);
      reject(err)
    }
  });
};

const findAdCategory = async (id : number) => {
  return new Promise<any> ( async (resolve, reject) => {
    try {
      const ads = await new AdsService().listByCategory(id);
      resolve(ads)
    } catch (err) {
      console.error("err", err);
      reject(err)
    }
  });
};

const createAd = async (ad: any) => {
  return new Promise<Ad>(async (resolve, reject) => {
    try {
      console.log("ad", ad)
      const newAd = await new AdsService().create(ad);
      resolve(newAd);
    } catch (err) {
      console.error("err", err);
      reject(err)
    }
  })
}

const deleteBDDAd = async (id: number) => {
  return new Promise<Ad>(async (resolve, reject) => {
    try {
      const adToDelete = await new AdsService().delete(id);
      resolve(adToDelete)
    } catch (err) {
      console.log(err);
      reject(err)
    }
  });
};

const updateBDDAd = async (sqlUpdate: string, params: string[], body: any) => {
  return new Promise<Ad>(async (resolve, reject) => {
    try {
      const idUp = parseInt(params[params.length-1]);
      const adToUpdate = await new AdsService().update(idUp, body);
      resolve(adToUpdate)
    } catch (err) {
      console.log(err);
      reject(err)
    }
  });
};

const updateBDDAdGraphQl = async (id : number, body: any) => {
  return new Promise<Ad>(async (resolve, reject) => {
    try {
      const adToUpdate = await new AdsService().update(id, body);
      resolve(adToUpdate)
    } catch (err) {
      console.log(err);
      reject(err)
    }
  });
};

const listWithFilterModel = async (filter: any) => {
  return new Promise<Ad[]>(async (resolve, reject) => {
    try {
      const adToUpdate = await new AdsService().listWithFilter(filter);
      resolve(adToUpdate)
    } catch (err) {
      console.log(err);
      reject(err)
    }
  });
};

export { 
  findAllAds,
  findAd,
  findAdCategory,
  createAd,
  deleteBDDAd,
  updateBDDAd,
  updateBDDAdGraphQl,
  listWithFilterModel,
}; 
