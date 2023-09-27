import { Request, Response, NextFunction  } from "express";

interface ValidationError {
    field: string;
    message: string;
}

const validateAddCategories = (req: Request, res: Response, next: NextFunction) => {

}

export { validateAddCategories }