import { Repository } from "typeorm";
import { Ad } from "../entities/ad.entity";
import datasource from "../config/database";

export default class AdsService {
  db: Repository<Ad>;
  constructor() {
    this.db = datasource.getRepository(Ad);
  }

  async listByCategory(id: number) {
    return await this.db.find({ where: { category: { id } } });
  }
}