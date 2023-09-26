import { Response, NextFunction  } from "express";
import { CustomRequestUpdate } from "../modules/ads/types";
import { Ad } from "../entities/ad.entity";

interface ValidationError {
    field: string;
    message: string;
}

const createRequestSqlUpdate = (req: CustomRequestUpdate, res: Response, next: NextFunction) => {
    const idOfAdToUpdate: number = parseInt(req.params.id, 10);
    const updateAdBody : Ad[] = req.body;
    const validationErrors: ValidationError[] = []; 
    const checkKey: string[] = [
        "id",
        "title",
        "description",
        "owner",
        "price",
        "picture", 
        "location", 
        "createdAt",
        "category_id"
    ];
    
    if (Object.keys(updateAdBody).length === 0) {
        return res.sendStatus(204);
    }

    const sqlParams: any [] = [];

    const columnsToUpdate: string[] = Object.entries(updateAdBody).map(([key, value]: [string, any]) => {
        if (checkKey.indexOf(key) === -1) {
            validationErrors.push({ field: key, message: `The ${key} field is not required` });
        } else {
            sqlParams.push(value);
        }
        return `${key} = ?`;
    })

    const sqlUpdate = `UPDATE Ad SET ${columnsToUpdate.join(", ")} WHERE id = ?`;
    sqlParams.push(idOfAdToUpdate);

    if (validationErrors.length) {
        res.status(422).json({ validationErrors });
    } else {
        req.sqlUpdate = sqlUpdate;
        req.sqlParams = sqlParams;
        next();
    }    

}

export { createRequestSqlUpdate }