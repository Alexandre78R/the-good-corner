import { In, Like, Repository } from "typeorm";
import { Ad, CreateAdInput, UpdateAdInput, FilterAd } from "./entity";
import datasource from "../../config/database";
import { IAdForm } from "./types";
import { validate } from "class-validator";
import CategoryService from "../categories/service";
import { aggregateErrors } from "../../libs/utilities";
import { Category } from "../categories/entity";

export default class AdsService {
  db: Repository<Ad>;
  dbCategory: Repository<Category>;
  constructor() {
    this.db = datasource.getRepository(Ad);
    this.dbCategory = datasource.getRepository(Category);
  }
  // async listWithFilter({ title, categoryId }: FilterAd) {
  //   const result = await this.dbCategory.find({
  //     relations: {
  //       ads: true,
  //     },
  //     select: {
  //       id: true,
  //       name: true,
  //       ads: {
  //         id: true,
  //         title: true,
  //       },
  //     },
  //     where: {
  //       ads: { title: title ? Like(`%${title}%`) : undefined },
  //       id: categoryId ? +categoryId : undefined,
  //     },
  //   });
  //   console.log("RESULT", result);
  //   return result;
  // }
  // async listWithFilter({ title, categoryId }: FilterAd) {
  //   return await this.db.find({
  //     relations: {
  //       category: true,
  //     },
  //     select: {
  //       id: true,
  //       title: true,
  //       category: {
  //         id: true,
  //         name: true,
  //       },
  //     },
  //     where: {
  //       title: title ? Like(`%${title}%`) : undefined,
  //       category: { id: categoryId ? +categoryId : undefined },
  //     },
  //   });
  // }

  async listWithFilter({ title, categoryId }: FilterAd) {
    return await this.db
      .createQueryBuilder("a")
      .select(["a.id", "a.title"])
      .leftJoinAndSelect("a.category", "category")
      .where("LOWER(a.title) LIKE :title", {
        title: `%${title.toLowerCase()}%`,
      })
      .getMany();
    // return await this.db.find({
    //   relations: {
    //     category: true,
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     category: {
    //       id: true,
    //       name: true,
    //     },
    //   },
    //   where: [
    //     {title: title ? Like(`%${title}%`) : undefined},
    //     // {category: { id: categoryId ? +categoryId : undefined }},
    //   ],
    // });
  }

  async list(tagIds?: string) {
    return await this.db.find({
      relations: {
        category: true,
        tags: true,
      },
      where: {
        tags: {
          id:
            typeof tagIds === "string" && tagIds.length > 0
              ? In(tagIds.split(",").map((t) => parseInt(t, 10)))
              : undefined,
        },
      },
    });
  }

  async listRandom() {
    return await this.db
      .createQueryBuilder("a")
      .orderBy("RANDOM()")
      .limit(5)
      .getMany();
  }
  
  async listByCategory(id: number) {
    return await this.db.find({
      where: { category: { id } },
      order: { createdAt: "DESC" },
    });
  }

  async find(id: number) {
    const ad = await this.db.findOne({
      where: { id },
      relations: { category: true },
    });

    // if (!ad) {
    //   // throw new Error("L'annonce n'existe pas");
    //   throw new AggregateError([
    //     {
    //       field: null,
    //       message: "L'annonce n'existe pas",
    //     },
    //   ]);
    // }
    return ad;
  }

  async create(data: CreateAdInput) {
    const categoryToLink = await new CategoryService().find(
      +data?.category?.id
    );
    if (!categoryToLink) {
      throw new Error("La catégorie n'existe pas!");
    }
    const newAd = this.db.create({ ...data, category: categoryToLink });
    const errors = await validate(newAd);
    console.log("ERRORS => ", errors);

    if (errors.length !== 0) {
      throw new AggregateError(aggregateErrors(errors));
    }
    return await this.db.save(newAd);
  }

  async delete(id: number) {
    const adToDelete = await this.find(id);
    console.log("adToDelete", adToDelete);
    if (!adToDelete) {
      throw new Error("L'annonce n'existe pas!");
    }

    return await this.db.remove(adToDelete);
  }

  async update(id: number, data: Omit<UpdateAdInput, "id">) {
    const categoryToLink = await new CategoryService().find(
      +data?.category?.id
    );
    if (!categoryToLink) {
      throw new Error("La catégorie n'existe pas!");
    }

    const adToUpdate = await this.find(id);
    if (!adToUpdate) {
      throw new Error("L'annonce n'existe pas!");
    }
    const adToSave = this.db.merge(adToUpdate, {
      ...data,
      category: categoryToLink,
    });
    const errors = await validate(adToSave);
    if (errors.length !== 0) {
      console.log(errors);
      throw new Error("il y a eu une erreur");
    }

    return await this.db.save(adToSave);
  }
}
