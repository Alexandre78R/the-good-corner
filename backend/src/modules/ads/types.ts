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

  interface IAdForm extends Omit<Ad, "createdAt" | "updatedAt" | "tags"> {
    id?: number; // Maintenant, id est obligatoire et de type number
    category: Omit<Category, "name">;
}

export { 
    CustomRequestUpdate,
    IAdForm
}