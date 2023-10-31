// import CategoryService from "../modules/categories/service"
import { 
    findAllCategories,
    findCategorie,
    createCategories,
  } from "../modules/categories/model";
import  { ICreateCategory } from "../modules/categories/types";

export default {
  Query: {
    listCategories: async () => {
      //toute ma logique de récupération de categories
    //   const categories = await new CategoryService().list();
    const categories = await findAllCategories();
    return categories;
    },
    findCategory: async (_: any, {id} : any) => {
        console.log(id);
        // const category = await new CategoryService().find(+id);
        const category = await findCategorie(+id);
        return category;
    },
  },
  Mutation: {
    createCategory: async (_: any, { data }: { data: ICreateCategory }) => {
        // throw new Error("Je teste")
    //   const newCategory = await new CategoryService().create({ ...data });
        const newCategory = await createCategories({ ...data });
        return newCategory;
    },
  },
};
