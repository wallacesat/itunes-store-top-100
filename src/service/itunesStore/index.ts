import intunesStoreTop100Mapper from '~/models/itunesStoreMapper';
import api from '~/service/api';
import { ItunesStoreTop100 } from './types';

export default function fetchItunesStoreTop100(): Promise<void | ItunesStoreTop100> {
  const result = api
    .get('/us/rss/topalbums/limit=100/json')
    .then(intunesStoreTop100Mapper)
    .catch(err => console.log('**-ERRO FETCH ITUNES STORE-**', err));

  return result;
}
