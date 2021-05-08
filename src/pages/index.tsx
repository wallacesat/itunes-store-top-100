import * as React from 'react';
import Image from 'next/image';
import { find, filter, some, map } from 'lodash';
import styled from 'styled-components';

import AlbumItem from '~/components/AlbumItem';
import SearchBar from '~/components/SearchBar';

import useItunesStoreTop100 from '~/hooks/useItunesStoreTop100';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';
import AlbumInEvidence from '~/components/AlbumInEvidence';
import AlbumListHeader from '~/components/AlbumListHeader';

const MainPage = styled.div.attrs({
  className: 'grid grid-cols-2 h-screen max-h-screen p-6 relative',
})``;

const AlbunEvidenceSection = styled.div.attrs({
  className: 'h-full max-h-full flex justify-center items-center z-10',
})``;

const AlbumListSection = styled.div.attrs({
  className: 'h-full max-h-full overflow-hidden z-10',
})``;

const AlbumList = styled.div.attrs({
  className: 'rounded-lg',
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto !important;
`;

const Home: React.FC = () => {
  const { isFetching, isFetched, data } = useItunesStoreTop100();

  const [favorites, setFavorites] = React.useState<ItunesStoreTop100Data[]>([]);
  const [
    albumInEvidence,
    setAlbumInEvidence,
  ] = React.useState<ItunesStoreTop100Data>();

  console.log({ isFetching, isFetched, data });

  React.useEffect(() => {
    if (!albumInEvidence && isFetched && data) {
      setAlbumInEvidence(data.entry[0]);
    }
  }, [isFetched, data, albumInEvidence]);

  function handleClickFavorite(id: string) {
    const favoritesAtt = new Array(...favorites);
    const newFavorite = find(favorites, favorite => favorite.id === id);

    if (newFavorite) {
      setFavorites(filter(favorites, favorite => favorite.id !== id));
    } else {
      favoritesAtt.push(find(data.entry, album => album.id === id));
      setFavorites(favoritesAtt);
    }
  }

  function isFavorite(id: string) {
    return some(favorites, favorite => favorite.id === id);
  }

  function handleClickAlbum(id: string) {
    setAlbumInEvidence(find(data.entry, album => album.id === id));
  }

  return (
    <MainPage>
      <div className="absolute w-full h-full border border-red-600 z-0">
        <Image
          src="/bg_image.png"
          alt="background_img"
          layout="fill"
          objectFit="cover"
          objectPosition="cover"
        />
      </div>
      <AlbunEvidenceSection>
        <div className="flex items-center justify-center">
          <AlbumInEvidence
            album={albumInEvidence}
            handleClickFavorite={handleClickFavorite}
            isFavorite={isFavorite((albumInEvidence || {}).id)}
          />
        </div>
      </AlbunEvidenceSection>
      <AlbumListSection>
        {isFetched && data && (
          <>
            <SearchBar />
            <AlbumListHeader />
            <AlbumList>
              {map(data.entry, album => {
                return (
                  <AlbumItem
                    id={album.id}
                    img={album.image[2].uri}
                    albumName={album.name}
                    artistName={album.artist.name}
                    price={album.price}
                    handleClickFavorite={handleClickFavorite}
                    handleClickAlbum={handleClickAlbum}
                    isFavorite={isFavorite(album.id)}
                  />
                );
              })}
            </AlbumList>
          </>
        )}
      </AlbumListSection>
    </MainPage>
  );
};

export default Home;
