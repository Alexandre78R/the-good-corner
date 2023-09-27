import { Request, Response, NextFunction  } from "express";

interface ValidationError {
    field: string;
    message: string;
}

const validateAddAds = (req: Request, res: Response, next: NextFunction) => {
    const { title , description, owner, price, picture, location} = req.body;
    const validationErrors: ValidationError[] = []; 

    if (title == null || title === "") {
        validationErrors.push({ field: "title", message: "The title field is required" });
    }

    if (description == null || description === "") {
        validationErrors.push({ field: "description", message: "The description field is required" });
    }

    if (owner == null || owner === "") {
        validationErrors.push({ field: "owner", message: "The owner field is required" });
    }

    if (price == null || price === "") {
        validationErrors.push({ field: "price", message: "The price field is required" });
    }

    if (picture == null || picture === "") {
        validationErrors.push({ field: "picture", message: "The picture field is required" });
    }

    if (location == null || location === "") {
        validationErrors.push({ field: "location", message: "The location field is required" });
    }

    if (validationErrors.length) {
        res.status(422).json({ validationErrors });
    } else {
        next();
    }
}

export { validateAddAds }