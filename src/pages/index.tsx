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
import { useAlbums } from '~/contexts/AlbumsContext';
import useFavorites from '~/hooks/useFavorites';
import useSearchAlbum from '~/hooks/useSearchAlbum';
import AlbumNotFound from '~/components/AlbumNotFound';
import LottieNotFound from '~/components/LottieNotFound';

const Home: React.FC = () => {
  const { albuns, isFetched, sortedAlbumsInfo, sortAlbuns } = useAlbums();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { searchAlbum } = useSearchAlbum();

  const [searchAlbumsQuery, setSearchAlbumQuery] = React.useState('');
  const [albumsFound, setAlbumsFound] = React.useState<ItunesStoreTop100Data[]>(
    [],
  );

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

  React.useEffect(() => {
    setAlbumInEvidence(albumsFound[0]);
  }, [albumsFound]);

  React.useEffect(() => {
    setAlbumsFound(searchAlbum(searchAlbumsQuery));
  }, [searchAlbumsQuery, searchAlbum]);

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
          {(albuns.length && !searchAlbumsQuery) || albumsFound.length ? (
            <AlbumInEvidence
              album={albumInEvidence}
              handleClickFavorite={handleClickFavorite}
              isFavorite={isFavorite((albumInEvidence || {}).id)}
            />
          ) : (
            <LottieNotFound />
          )}
        </div>
      </AlbunEvidenceSection>
      <AlbumListSection>
        {isFetched && albuns.length && (
          <>
            <SearchBar
              text={searchAlbumsQuery}
              onChangeText={setSearchAlbumQuery}
            />
            <AlbumListHeader />
            <AlbumList>
              {(albuns.length && !searchAlbumsQuery) || albumsFound.length ? (
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
              ) : null}
              {!albumsFound.length && searchAlbumsQuery && <AlbumNotFound />}
              <div className="album-list">
                {map(
                  albumsFound.length || searchAlbumsQuery
                    ? albumsFound
                    : albuns,
                  album => {
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
                  },
                )}
              </div>
            </AlbumList>
          </>
        )}
      </AlbumListSection>
    </MainPage>
  );
};

export default Home;
