import { Arg, Mutation, Query, Resolver } from "type-graphql";
// import AdsService from "../modules/ads/service";
import CategoryService from "../modules/categories/service";
import { IAdForm, IUpdateForm } from "../modules/ads/types";
import { 
    findAllAds,
    findAd,
    findAdCategory,
    createAd,
    deleteBDDAd,
    updateBDDAdGraphQl,
    listWithFilterModel,
  } from "../modules/ads/model";
  import { 
    findCategorie,
  } from "../modules/categories/model";
  import { Ad, AdDeleted, AdWithFilter, CreateAdInput, FilterAd, UpdateAdInput } from "../modules/ads/entity";

  @Resolver()
export class AdResolver {
  @Query(()=> [Ad])
  async listAds (){
    // const ads = await new AdsService().list();
    const ads = await findAllAds();
    return ads;
  }

  @Query(() => [AdWithFilter])
  async listAdsWithFilter(@Arg("filter") filter: FilterAd ) {
    // const ads = await new AdsService().listWithFilter(filter);
    const ads = await listWithFilterModel(filter);
    return ads;
  }

  @Query(() => [Ad])
  async listAdsByCategory(@Arg("id") id: string) {
    // const category = await new CategoryService().find(+id);
    const category = await findCategorie(+id);
    if (!category) {
      throw new Error("La catégorie n'existe pas");
    }
    // const ads = await new AdsService().listByCategory(+id);
    const ads = await findAdCategory(+id);
    return ads;
  }
  
  @Query(() => Ad)
  async findAdById(@Arg("id") id: string) {
    console.log(id)
    const ad = await findAd(+id);
    if (!ad) {
    throw new Error("L'annonce n'existe pas !");
    }
    // console.log("ad -----------------------------", ad)
    return ad;
  }

  @Mutation(() => Ad)
  async createAd(@Arg("data") data: CreateAdInput) {
    const newAd = await createAd(data);
    return newAd;
  }

  @Mutation(() => AdDeleted)
  async deleteAd(@Arg("id") id: string) {
    // const {id: idAd, ...ad} = await new AdsService().delete(+id);
    // return ad
    // console.log("id-->",id)
    return await deleteBDDAd(+id);
  }

  @Mutation(() => Ad)
  async updateAd(@Arg("data") data: UpdateAdInput) {
    // return await deleteBDDAd(+id);
    const { id, ...outherData } = data;
    // return await new AdsService().update(id, body);
    const updateAdBdd = await updateBDDAdGraphQl(+id, outherData)
    return updateAdBdd;
  }
}

// export default {
//   Query: {
//     listAds: async () => {
//     //   const ads = new AdsService().list();
//         const ads = await findAllAds();
//         return ads;
//     },
//     listAdsByCategory: async (_: any, { id }: { id: string }) => {
//         // const category = await new CategoryService().find(+id);
//         const category = await findCategorie(+id);
//         if (!category) {
//         throw new Error("La catégorie n'existe pas");
//         }
//         // const ads = await new AdsService().listByCategory(+id);
//         const ads = await findAdCategory(+id);
//         return ads;
//     },
//     findAdById: async (_: any, {id}:  {id: string}) => {
//         // const ad = await new AdsService().find(+id);
//         const ad = await findAd(+id);
//         if (!ad) {
//         throw new Error("L'annonce n'existe pas");
//         }
//         return ad;
//     }
//   },
//   Mutation: {
//     createAd: async (_: any, { data }: { data: IAdForm }) => {
//         // const newAd = await new AdsService().create(data);
//         const newAd = await createAd(data);
//         return newAd;
//     },
//     deleteAd: async (_: any, { id }: { id: string }) => {
//         return await deleteBDDAd(+id);
//         // return await new AdsService().delete(+id);
//     },
//     updateAd: async (_: any, { data } : { data: IUpdateForm }) => {
//         const { id, ...outherData } = data;
//         // return await new AdsService().update(id, body);
//         return await updateBDDAdGraphQl(+id, outherData);
//     },
//   },
// };