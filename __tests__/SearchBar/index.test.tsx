import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import SearchBar from '~/components/SearchBar';

test('Render the SearchBar correctly', () => {
  let text = '';
  const mockFnOnChangeText = jest.fn((t) => { text = t })
  const mockFnOnClear = jest.fn(() => { text = text.slice(0 , -1) })

  const { container, getByPlaceholderText } = render(
    <SearchBar onChangeText={mockFnOnChangeText} onClear={mockFnOnClear} text="Hello World"/>
  );

  const input = getByPlaceholderText('Search...')

  expect(input).toBeInTheDocument()

  const searchIcon = container.childNodes[0].firstChild.firstChild
  expect(searchIcon).toHaveAttribute('data-icon', 'search');
  expect(searchIcon).toHaveAttribute('data-prefix', 'fas');

  userEvent.type(screen.getByRole('textbox'), '!');
  expect(mockFnOnChangeText.mock.calls.length).toEqual(1); //quantidade de letras
  expect(text).toBe('Hello World!')

  const clearIcon = container.firstChild.childNodes[2].firstChild
  expect(clearIcon).toHaveAttribute('data-icon', 'times');
  expect(clearIcon).toHaveAttribute('data-prefix', 'fas');

  fireEvent.click(clearIcon)
  expect(mockFnOnClear.mock.calls.length).toEqual(1);
  expect(text).toBe('Hello World')
});
