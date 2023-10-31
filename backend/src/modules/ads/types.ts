import { Request } from "express";
import { Category } from "../categories/entity";
import { Tag } from "../tags/entity";

interface CustomRequestUpdate extends Request {
    sqlUpdate?: string;
    sqlParams?: any[];
}

interface Ad {
    id: number;
    title: string;
    description: string;
    owner: string;
    price: number;
    location: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    tags: Tag[];
}

//   interface IAdForm extends Omit<Ad, "createdAt" | "updatedAt" | "tags"> {
//     id?: number; // Maintenant, id est obligatoire et de type number
//     category: Omit<Category, "name">;
// }

interface IAdForm extends Omit<Ad, "createdAt" | "updatedAt" | "tags"> {
    id?: number | undefined; // on prévoir l'édition => surcharge de "id", lors de la création l'id n'est pas défini
    category: Omit<Category, "name">;
  }
  
  export interface IUpdateForm extends IAdForm {
    id: number;
  }
  

export { 
    CustomRequestUpdate,
    IAdForm,
    Ad
}