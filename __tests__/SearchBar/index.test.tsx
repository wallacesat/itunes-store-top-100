import { render } from '@testing-library/react';

import SearchBar from '~/components/SearchBar';

test('Render the SearchBar correctly', () => {
  const { container, getByPlaceholderText } = render(<SearchBar text="Test SearchBar"/>);
  const input = getByPlaceholderText('Search...')

  expect(input).toBeInTheDocument()
  expect(input).toHaveValue('Test SearchBar');

  const icon = container.childNodes[0].firstChild.firstChild

  expect(icon).toHaveAttribute('data-icon', 'search');
  expect(icon).toHaveAttribute('data-prefix', 'fas');
});
