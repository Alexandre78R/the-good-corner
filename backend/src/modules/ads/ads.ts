import { Ad } from "./types";

let ads: Ad [] = [
    {
      id: 1,
      title: "Bike to sell",
      description:
        "My bike is blue, working fine. I'm selling it because I've got a new one",
      owner: "bike.seller@gmail.com",
      price: 100,
      picture:
        "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
      location: "Paris",
      createdAt: "2023-09-05T10:13:14.755Z",
      "category_id" : 1
    },
    {
      id: 2,
      title: "Car to sell",
      description:
        "My car is blue, working fine. I'm selling it because I've got a new one",
      owner: "car.seller@gmail.com",
      price: 10000,
      picture:
        "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
      location: "Paris",
      createdAt: "2023-10-05T10:14:15.922Z",
      "category_id" : 2
    },
  ];
  

const addAd = (newAd: Ad) => {
  ads.push(newAd);
};

const updateAd = (id: number, updatedAd: Partial<Ad>) => {
  const adToUpdateIndex = ads.findIndex((ad) => ad.id === id);

  if (adToUpdateIndex === -1) {
    return false;
  }

  ads[adToUpdateIndex] = { ...ads[adToUpdateIndex], ...updatedAd };
  return true;
};

export { ads, addAd, updateAd }