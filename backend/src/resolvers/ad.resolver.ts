import AdsService from "../modules/ads/service";
import CategoryService from "../modules/categories/service";
import { IAdForm, IUpdateForm } from "../modules/ads/types";
import { 
    findAllAds,
    findAd,
    findAdCategory,
    createAd,
    deleteBDDAd,
    updateBDDAdGraphQl,
  } from "../modules/ads/model";
  import { 
    findCategorie,
  } from "../modules/categories/model";

export default {
  Query: {
    listAds: async () => {
    //   const ads = new AdsService().list();
        const ads = await findAllAds();
        return ads;
    },
    listAdsByCategory: async (_: any, { id }: { id: string }) => {
        // const category = await new CategoryService().find(+id);
        const category = await findCategorie(+id);
        if (!category) {
        throw new Error("La catégorie n'existe pas");
        }
        // const ads = await new AdsService().listByCategory(+id);
        const ads = await findAdCategory(+id);
        return ads;
    },
    findAdById: async (_: any, {id}:  {id: string}) => {
        // const ad = await new AdsService().find(+id);
        const ad = await findAd(+id);
        if (!ad) {
        throw new Error("L'annonce n'existe pas");
        }
        return ad;
    }
  },
  Mutation: {
    createAd: async (_: any, { data }: { data: IAdForm }) => {
        // const newAd = await new AdsService().create(data);
        const newAd = await createAd(data);
        return newAd;
    },
    deleteAd: async (_: any, { id }: { id: string }) => {
        return await deleteBDDAd(+id);
        // return await new AdsService().delete(+id);
    },
    updateAd: async (_: any, { data } : { data: IUpdateForm }) => {
        const { id, ...outherData } = data;
        // return await new AdsService().update(id, body);
        return await updateBDDAdGraphQl(+id, outherData);
    },
  },
};