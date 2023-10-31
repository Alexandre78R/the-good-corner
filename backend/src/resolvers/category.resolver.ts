// import CategoryService from "../modules/categories/service"
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { 
    findAllCategories,
    findCategorie,
    createCategories,
  } from "../modules/categories/model";
  // import {
  //   CreateCategoryInput,
  //   QueryFindCategoryArgs,
  // } from "../types/resolvers-types";
import  { ICreateCategory } from "../modules/categories/types";
import { Category, CreateCategoryInput } from "../modules/categories/entity"

@Resolver(() => Category)
export default class CategoryResolver {

  @Query(() => [Category])
  async listCategories() {
    // const categories = await new CategoryService().list();
    const categories = await findAllCategories();
    return categories;
  }

  @Query(() => Category)
  // async findCategory(@Args() { id, infos }: Toto) {
  // console.log("INFOS => ", infos);
  async findCategory(@Arg("id") id: string) {
    // const category = await new CategoryService().find(+id);
    const category = await findCategorie(+id);
    return category;
  }

  @Mutation(() => Category)
  async createCategory(@Arg("data") data: CreateCategoryInput) {
    // const newCategory = await new CategoryService().create({ ...data });
    const newCategory = await createCategories({ ...data });
    return newCategory;
  }
}

// export const data = {  Query: {
//     listCategories: async () => {
//       //toute ma logique de récupération de categories
//     //   const categories = await new CategoryService().list();
//     const categories = await findAllCategories();
//     return categories;
//     },
//     findCategory: async (_: any, {id} : QueryFindCategoryArgs) => {
//         // console.log(id);
//         // const category = await new CategoryService().find(+id);
//         const category = await findCategorie(+id);
//         return category;
//     },
//   },
//   Mutation: {
//     createCategory: async (_: any, { data }: { data: CreateCategoryInput }) => {
//         // throw new Error("Je teste")
//     //   const newCategory = await new CategoryService().create({ ...data });
//         const newCategory = await createCategories({ ...data });
//         return newCategory;
//     },
//   },
// };

// export default {
//   Query: {
//     listCategories: async () => {
//       //toute ma logique de récupération de categories
//     //   const categories = await new CategoryService().list();
//     const categories = await findAllCategories();
//     return categories;
//     },
//     findCategory: async (_: any, {id} : any) => {
//         console.log(id);
//         // const category = await new CategoryService().find(+id);
//         const category = await findCategorie(+id);
//         return category;
//     },
//   },
//   Mutation: {
//     createCategory: async (_: any, { data }: { data: ICreateCategory }) => {
//         // throw new Error("Je teste")
//     //   const newCategory = await new CategoryService().create({ ...data });
//         const newCategory = await createCategories({ ...data });
//         return newCategory;
//     },
//   },
// };
