import * as React from 'react';
import { find, map } from 'lodash';

import AlbumItem from '~/components/AlbumItem';
import SearchBar from '~/components/SearchBar';

import { ItunesStoreTop100Data } from '~/service/itunesStore/types';
import AlbumInEvidence from '~/components/AlbumInEvidence';
import AlbumListHeader from '~/components/AlbumListHeader';
import AlbumItemSorter from '~/components/AlbumItemSorter';
import MainPage from '~/components/MainPage';
import AlbunEvidenceSection from '~/components/AlbunEvidenceSection';
import AlbumListSection from '~/components/AlbumListSection';
import AlbumList from '~/components/AlbumList';
import { useStorage } from '~/contexts/StorageContext';
import useFavorites from '~/hooks/useFavorites';

const Home: React.FC = () => {
  const { albuns, isFetched, sortedAlbumsInfo, sortAlbuns } = useStorage();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [
    albumInEvidence,
    setAlbumInEvidence,
  ] = React.useState<ItunesStoreTop100Data>();

  React.useEffect(() => {
    if (!albumInEvidence && isFetched && albuns) {
      setAlbumInEvidence(albuns[0]);
    }
  }, [isFetched, albuns, albumInEvidence]);

  React.useEffect(() => {
    setAlbumInEvidence(albuns[0]);
  }, [albuns]);

  function handleClickFavorite(id: string) {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(find(albuns, album => album.id === id));
    }
  }

  function handleClickAlbum(id: string) {
    setAlbumInEvidence(find(albuns, album => album.id === id));
  }

  return (
    <MainPage>
      <div className="absolute w-full h-full z-0">
        <img
          className="object-cover w-full h-full"
          src="/images/bg_image.png"
          alt=""
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
        {isFetched && albuns.length && (
          <>
            <SearchBar />
            <AlbumListHeader />
            <AlbumList>
              <AlbumItemSorter
                isByAlbum={sortedAlbumsInfo.sortedBy === 'album'}
                isDescOrder={sortedAlbumsInfo.isDescOrder}
                handleSortByAlbum={() =>
                  sortAlbuns(!sortedAlbumsInfo.isDescOrder, 'album')
                }
                handleSortByArtist={() =>
                  sortAlbuns(!sortedAlbumsInfo.isDescOrder, 'artist')
                }
              />
              <div className="album-list">
                {map(albuns, album => {
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
              </div>
            </AlbumList>
          </>
        )}
      </AlbumListSection>
    </MainPage>
  );
};

export default Home;
