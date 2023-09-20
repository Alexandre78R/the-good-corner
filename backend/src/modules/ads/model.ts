import { db } from "../../config/database";

const findAllAds = async () => {
    try {
        db.all("SELECT * FROM ad", (err, rows) => {
            return rows;
        })        
    } catch (err) {
        console.error("err", err);
    }
}

export { findAllAds }; 