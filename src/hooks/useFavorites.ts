/* eslint-disable no-unused-vars */

import * as React from 'react';
import { filter, some } from 'lodash';

import { ItunesStoreTop100Data } from '~/service/itunesStore/types';
import useLocalStorage from './useLocalStorage';

const favoritesStogareKey = '@itunes-store-top-100::favorites';

type useFavoritesRetur = {
  favorites: ItunesStoreTop100Data[];
  addFavorite: (favorite: ItunesStoreTop100Data) => void;
  removeFavorite: (favoriteId: string) => void;
  isFavorite: (favoriteId: string) => boolean;
};

export const useFavorites = (): useFavoritesRetur => {
  const { getItem, setItem } = useLocalStorage();

  const [favorites, setFavorites] = React.useState<ItunesStoreTop100Data[]>(
    (getItem(favoritesStogareKey) || []) as ItunesStoreTop100Data[],
  );

  function addFavorite(favorite: ItunesStoreTop100Data) {
    setItem(favoritesStogareKey, [...favorites, favorite]);
    setFavorites([...favorites, favorite]);
  }

  function removeFavorite(favoriteId: string) {
    const filteredFavorites = filter(
      favorites,
      favorite => favorite.id !== favoriteId,
    );
    setItem(favoritesStogareKey, filteredFavorites);
    setFavorites(filteredFavorites);
  }

  function isFavorite(id: string) {
    return some(favorites, favorite => favorite.id === id);
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};

export default useFavorites;
