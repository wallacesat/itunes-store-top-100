export type ItunesStoreTop100Image = {
  uri: string;
  height: string;
};

export type ItunesStoreTop100Artist = {
  name: string;
  link: string;
};

export type ItunesStoreTop100Category = {
  id: string;
  nome: string;
  link: string;
};

export type ItunesStoreTop100Data = {
  name: string;
  image: ItunesStoreTop100Image[];
  price: string;
  rights: string;
  title: string;
  link: string;
  id: string;
  artist: ItunesStoreTop100Artist;
};

export interface ItunesStoreTop100 {
  entry: ItunesStoreTop100Data[];
}
