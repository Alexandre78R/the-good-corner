import TagService from "./service";
import { ICreateTag, IListTag } from "./types";

const findAllTags = async (queryName : any) => {
  return new Promise<IListTag[]> ( async (resolve, reject) => {
    try {
      const { name } = queryName as unknown as IListTag;
      const tags = await new TagService().list(name);
      resolve(tags);
    } catch (err) {
      console.error("err", err);
    }
  });
};

const createTags = async (tag: ICreateTag) => {
  return new Promise<ICreateTag>(async (resolve, reject) => {
    try {
      // const data = req.body as ICreateTag;
      const data: ICreateTag = tag;
      const newTag = new TagService().create({ ...data });
      resolve(newTag);
    } catch (err) {
      console.error("err", err);
    }
  })
}

const deleteBDDTags = async (id: number) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const tagToDelete = await new TagService().delete(+id);
      resolve(tagToDelete)
    } catch (err) {
      console.log(err);
    }
  });
};

export { 
  findAllTags,
  createTags,
  deleteBDDTags,
}; 
