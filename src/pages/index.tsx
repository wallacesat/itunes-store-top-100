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
import BgImage from '~/components/BgImage';
import useSortAlbums from '~/hooks/useSorteAlbums';
import ModalWrapper from '~/components/Modal';

const Home: React.FC = () => {
  const { albuns, isFetched } = useAlbums();
  const { addFavorite, removeFavorite, isFavorite, favorites } = useFavorites();
  const { searchAlbum } = useSearchAlbum();
  const { sortAlbuns, sortedAlbumsInfo } = useSortAlbums();

  const [isVisibleMobileModal, setIsVisibleMobileModal] = React.useState(false);
  const [searchAlbumsQuery, setSearchAlbumQuery] = React.useState('');
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [albumsList, setAlmbumsList] = React.useState<ItunesStoreTop100Data[]>(
    [],
  );

  const [
    albumInEvidence,
    setAlbumInEvidence,
  ] = React.useState<ItunesStoreTop100Data>();

  React.useEffect(() => {
    if (!albumInEvidence && isFetched && albumsList) {
      setAlbumInEvidence(albumsList[0]);
    }
  }, [isFetched, albumsList, albumInEvidence]);

  React.useEffect(() => {
    setAlbumInEvidence(albumsList[0]);
  }, [albumsList]);

  React.useEffect(() => {
    if (!showFavorites) {
      setAlmbumsList(
        searchAlbumsQuery ? searchAlbum(searchAlbumsQuery) : albuns,
      );
    } else if (favorites.length) {
      setAlmbumsList(
        searchAlbumsQuery
          ? searchAlbum(searchAlbumsQuery, favorites)
          : favorites,
      );
    } else {
      setAlmbumsList([]);
    }
  }, [showFavorites, searchAlbumsQuery, favorites, albuns, searchAlbum]);

  function handleClickFavorite(id: string) {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(find(albuns, album => album.id === id));
    }
  }

  function handleClickAlbum(id: string) {
    setAlbumInEvidence(find(albuns, album => album.id === id));
    setIsVisibleMobileModal(true);
  }

  function handleSortByAlbum() {
    setAlmbumsList(
      sortAlbuns(albumsList, !sortedAlbumsInfo.isDescOrder, 'album'),
    );
  }
  function handleSortByArtist() {
    setAlmbumsList(
      sortAlbuns(albumsList, !sortedAlbumsInfo.isDescOrder, 'artist'),
    );
  }

  return (
    <MainPage>
      <BgImage />

      <AlbunEvidenceSection>
        <div className="flex flex-col items-center justify-center">
          {(showFavorites || searchAlbumsQuery) && !albumsList.length ? (
            <div className="hidden md:flex">
              <LottieNotFound />
            </div>
          ) : (
            <>
              <div className="hidden md:flex">
                <AlbumInEvidence
                  album={albumInEvidence}
                  handleClickFavorite={handleClickFavorite}
                  isFavorite={isFavorite((albumInEvidence || {}).id)}
                />
              </div>
              <div className="flex md:hidden">
                <ModalWrapper
                  visible={isVisibleMobileModal}
                  handleCloseModal={() => setIsVisibleMobileModal(false)}
                >
                  <div className="px-2 sm:px-6 flex items-center justify-center">
                    <AlbumInEvidence
                      album={albumInEvidence}
                      handleClickFavorite={handleClickFavorite}
                      isFavorite={isFavorite((albumInEvidence || {}).id)}
                    />
                  </div>
                </ModalWrapper>
              </div>
            </>
          )}
        </div>
      </AlbunEvidenceSection>
      <AlbumListSection>
        {isFetched && (
          <>
            <SearchBar
              text={searchAlbumsQuery}
              onChangeText={setSearchAlbumQuery}
              onClear={() => setSearchAlbumQuery('')}
            />
            <AlbumListHeader
              isShowingFavorites={showFavorites}
              onClickShowFavorites={() => setShowFavorites(true)}
              onClickShowTop100={() => setShowFavorites(false)}
            />
            <AlbumList>
              {albumsList.length ? (
                <AlbumItemSorter
                  isByAlbum={sortedAlbumsInfo.sortedBy === 'album'}
                  isDescOrder={sortedAlbumsInfo.isDescOrder}
                  handleSortByAlbum={handleSortByAlbum}
                  handleSortByArtist={handleSortByArtist}
                />
              ) : null}
              {(showFavorites || searchAlbumsQuery) && !albumsList.length && (
                <AlbumNotFound
                  label={
                    showFavorites && !searchAlbumsQuery
                      ? 'Favorites list ampty...'
                      : 'Album not found...'
                  }
                />
              )}
              {(showFavorites || searchAlbumsQuery) && !albumsList.length && (
                <div className="flex flex-1 justify-center md:hidden">
                  <LottieNotFound />
                </div>
              )}
              <div className="album-list">
                {map(albumsList, album => {
                  return (
                    <AlbumItem
                      key={album.id}
                      album={album}
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
