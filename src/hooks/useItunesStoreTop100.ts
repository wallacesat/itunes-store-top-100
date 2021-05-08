import { useQuery, UseQueryResult } from 'react-query';

import fetchItunesStoreTop100 from '~/service/itunesStore';
import { ItunesStoreTop100 } from '~/service/itunesStore/types';

export default function useItunesStoreTop100(): UseQueryResult<
  void | ItunesStoreTop100,
  unknown
> {
  return useQuery('fetchItunesStoreTop100_key', fetchItunesStoreTop100);
}
