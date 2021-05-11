import { render, fireEvent } from '@testing-library/react';
import AlbumItemSorter from '~/components/AlbumItemSorter';

test('Render the AlbumItemSorter with isByAlbum and isDescOrder being true', () => {
  const mockFnHandleSortByAlbum = jest.fn();
  const mockFnHandleSortByArtist = jest.fn();

  const { getByTestId } = render(
    <AlbumItemSorter
      isByAlbum
      isDescOrder
      handleSortByAlbum={mockFnHandleSortByAlbum}
      handleSortByArtist={mockFnHandleSortByArtist}
    />
  );

  const buttonSortByAlbum = getByTestId('button-sort-by-album-testid');
  const buttonSortByArtist = getByTestId('button-sort-by-artist-testid');

  fireEvent.click(buttonSortByAlbum)
  expect(mockFnHandleSortByAlbum.mock.calls.length).toEqual(1);

  fireEvent.click(buttonSortByArtist)
  expect(mockFnHandleSortByArtist.mock.calls.length).toEqual(1);

  expect(buttonSortByAlbum).toHaveTextContent('Album');
  expect(buttonSortByArtist).toHaveTextContent('Artist');

  const iconSortByAlbum = buttonSortByAlbum.firstChild.childNodes[1]
  expect(iconSortByAlbum).toHaveAttribute('data-icon', 'long-arrow-alt-up');
  expect(iconSortByAlbum).toHaveAttribute('data-prefix', 'fas');
  expect(iconSortByAlbum).toHaveClass('text-info');

  const iconSortByArtist = buttonSortByArtist.firstChild.childNodes[1]
  expect(iconSortByArtist).toHaveAttribute('data-icon', 'long-arrow-alt-down');
  expect(iconSortByArtist).toHaveAttribute('data-prefix', 'fas');
  expect(iconSortByArtist).toHaveClass('text-neutral-medium');
});

test('Render the AlbumItemSorter with only isDescOrder being true', () => {

  const { getByTestId } = render(<AlbumItemSorter isDescOrder/>);

  const buttonSortByAlbum = getByTestId('button-sort-by-album-testid');
  const buttonSortByArtist = getByTestId('button-sort-by-artist-testid');

  const iconSortByAlbum = buttonSortByAlbum.firstChild.childNodes[1]
  expect(iconSortByAlbum).toHaveAttribute('data-icon', 'long-arrow-alt-down');
  expect(iconSortByAlbum).toHaveAttribute('data-prefix', 'fas');
  expect(iconSortByAlbum).toHaveClass('text-neutral-medium');


  const iconSortByArtist = buttonSortByArtist.firstChild.childNodes[1]
  expect(iconSortByArtist).toHaveAttribute('data-icon', 'long-arrow-alt-up');
  expect(iconSortByArtist).toHaveAttribute('data-prefix', 'fas');
  expect(iconSortByArtist).toHaveClass('text-info');
});
