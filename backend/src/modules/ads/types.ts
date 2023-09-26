import { Request } from "express";

// type Ad = {
//     id: number;
//     title: string;
//     description: string;
//     owner: string;
//     price: number;
//     picture: string;
//     createdAt: string;
//     location: string;
//     category_id: number;
// }

interface CustomRequestUpdate extends Request {
    sqlUpdate?: string;
    sqlParams?: any[];
}

export { 
    // Ad,
    CustomRequestUpdate 
}