import express, { Request, Response, NextFunction  } from "express";

const validateAddAds = (req: Request, res: Response, next: NextFunction) => {
    const errors = ["dd"];
    if (errors.length) {
        res.status(422).json({ validationErrors: errors });
    } else {
        next();
    }
}

export{ validateAddAds }