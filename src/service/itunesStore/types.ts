export type ItunesStoreTop100Artist = {
  name: string;
  link: string;
};

export type ItunesStoreTop100Category = {
  id: string;
  name: string;
  link: string;
};

export type ItunesStoreTop100Data = {
  name: string;
  image: string;
  price: string;
  rights: string;
  title: string;
  link: string;
  id: string;
  artist: ItunesStoreTop100Artist;
  category: ItunesStoreTop100Category;
};

export interface ItunesStoreTop100 {
  entry: ItunesStoreTop100Data[];
}
