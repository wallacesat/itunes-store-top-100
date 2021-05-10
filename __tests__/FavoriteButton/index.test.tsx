import { render } from '@testing-library/react';
import FavoriteButton from '~/components/FavoriteButton';

test('Render the FavoriteButton correctly like favotire', () => {
  const { container } = render(<FavoriteButton isFavorite/>);
  expect(container.childNodes[0].firstChild).toHaveAttribute('data-prefix', 'fas');
});

test('Render the FavoriteButton correctly like unfavotire', () => {
  const { container } = render(<FavoriteButton isFavorite={false}/>);
  expect(container.childNodes[0].firstChild).toHaveAttribute('data-prefix', 'far');
});
