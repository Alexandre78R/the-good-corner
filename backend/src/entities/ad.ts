import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Length, Min } from "class-validator";
import { Category } from "./category";
import { Tag } from "./tag";

@Entity()
export function AdEntities() {
  const id = PrimaryGeneratedColumn();

  const title = Column({ length: 50 });
  Length(5, 50, { message: "Le titre doit contenir entre 5 et 50 caractères" })(this, "title");

  const description = Column({ nullable: true, type: "text" });

  const owner = Column();

  const price = Column({ type: "float" });
  Min(0, { message: "le prix doit être positif" })(this, "price");

  const location = Column();

  const picture = Column();

  const createdAt = CreateDateColumn();

  const category = ManyToOne(() => Category, (c) => c.ads, {
    cascade: true,
    onDelete: "CASCADE",
  });

  const tags = ManyToMany(() => Tag, (t) => t.ads, {
    cascade: true,
  });

  return {
    id,
    title,
    description,
    owner,
    price,
    location,
    picture,
    createdAt,
    category,
    tags,
  };
}