import { Category } from "./entity";
import CategoryService from "./service";
import { ICreateCategory } from "./types";

const findAllCategories = async (tagIds : any) => {
  return new Promise<ICreateCategory[]> ( async (resolve, reject) => {
    try {
      const categories = await new CategoryService().list();
      resolve(categories)
    } catch (err) {
      console.error("err", err);
      reject(err)
    }
  });
};

const createCategories = async (categorie: ICreateCategory) => {
  return new Promise<ICreateCategory>(async (resolve, reject) => {
    try {
      const data: ICreateCategory = categorie;
      const newCategory = await new CategoryService().create({ ...data });
      resolve(newCategory);
    } catch (err) {
      console.error("err", err);
      reject(err)
    }
  })
}

export { 
  findAllCategories,
  createCategories,
}; 
