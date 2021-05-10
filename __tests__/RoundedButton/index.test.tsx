import { render, fireEvent } from '@testing-library/react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import RoundedButton from '~/components/RoundedButton';

test('Render the RoundedButton with icon correctly', () => {
  const { getByRole } = render(<RoundedButton icon={faHeart} iconSize="1x" label="Test RoundedButton" />);
  const button = getByRole('button')
  const icon = button.firstChild.firstChild

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Test RoundedButton');
  expect(button).toHaveClass('pl-2 pr-4');

  expect(icon).toHaveAttribute('data-icon', 'heart');
  expect(icon).toHaveAttribute('data-prefix', 'fas');
});

test('Render the RoundedButton without icon correctly', () => {
  const mockFunc = jest.fn();

  const { getByRole } = render(<RoundedButton label="Test RoundedButton" onClick={mockFunc}/>);
  const button = getByRole('button')

  fireEvent.click(button)
  expect(mockFunc.mock.calls.length).toEqual(1);

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Test RoundedButton');
  expect(button).toHaveClass('px-3');
  expect(button).toMatchInlineSnapshot(`
    <button
      class="appearance-none flex bg-info rounded-full py-1 px-3 items-center cursor-pointer focus:outline-none "
      type="button"
    >
      <p
        class="text-sm  text-neutral-medium"
      >
        Test RoundedButton
      </p>
    </button>
  `);
});
