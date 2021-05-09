import { map } from 'lodash';

import {
  ItunesStoreTop100,
  ItunesStoreTop100Artist,
  ItunesStoreTop100Data,
} from '~/service/itunesStore/types';

const intunesStoreTop100Mapper = ({ data }): ItunesStoreTop100 => {
  const {
    feed: { entry },
  } = data;

  const result = {
    entry: map(entry || [], album => {
      const parsedAlbum = {
        name: String(album['im:name'].label),
        image: String(
          (album['im:image'][2] || album['im:image'][1] || album['im:image'][0])
            .label,
        ),
        price: String(album['im:price'].label),
        rights: String(album.rights.label),
        title: String(album.title.label),
        link: String(album.link.attributes.href),
        id: String(album.id.attributes['im:id']),
        artist: {
          name: String(album['im:artist'].label),
          link: album['im:artist'].attributes
            ? String(album['im:artist'].attributes.href)
            : '',
        } as ItunesStoreTop100Artist,
        category: {
          id: String(album.category.attributes['im:id']),
          name: String(album.category.attributes.label),
          link: String(album.category.attributes.scheme),
        },
      } as ItunesStoreTop100Data;

      return parsedAlbum;
    }),
  } as ItunesStoreTop100;

  return result;
};

export default intunesStoreTop100Mapper;
