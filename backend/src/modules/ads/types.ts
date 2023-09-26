import { Request } from "express";

interface CustomRequestUpdate extends Request {
    sqlUpdate?: string;
    sqlParams?: any[];
}

export { 
    CustomRequestUpdate 
}