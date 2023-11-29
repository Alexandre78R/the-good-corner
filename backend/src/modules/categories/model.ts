import { Category } from "./entity";
import CategoryService from "./service";
import { ICreateCategory } from "./types";

const findAllCategories = async (limit? : number) => {
  return new Promise<ICreateCategory[]> ( async (resolve, reject) => {
    try {
      const categories = await new CategoryService().list(limit);
      resolve(categories)
    } catch (err) {
      console.error("err", err);
      reject(err)
    }
  });
};

const findCategorie = async (id : number) => {
  return new Promise<any> ( async (resolve, reject) => {
    try {
      const categorie = await new CategoryService().find(+id);
      resolve(categorie)
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
  findCategorie,
  createCategories,
}; 
