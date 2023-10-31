import { Repository } from "typeorm";
import { Category } from "./entity";
import { ICreateCategory } from "./types";
import datasource from "../../config/database";

export default class CategoryService {
  db: Repository<Category>;
  constructor() {
    this.db = datasource.getRepository(Category);
  }

  async list() {
    console.log("TEST 2");
    const categories = await this.db.find({
      relations: {
        ads: true,
      },
    });
    console.log("TEST 3");

    return categories;
  }

  async create({ name }: ICreateCategory) {
    const newCategory = this.db.create({ name });
    return await this.db.save(newCategory);
  }

  async find(id: number) {
    console.log("async find,", id)
    return await this.db.findOneBy({ id });
  }
}
