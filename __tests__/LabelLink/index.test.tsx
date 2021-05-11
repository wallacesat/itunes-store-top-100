import { render, fireEvent } from '@testing-library/react';
import LabelLink from '~/components/LabelLink';

test('Render the LabelLink with textColorClass correctly', () => {
  const mockFn = jest.fn();

  const { container, getByRole } = render(
    <LabelLink onClick={mockFn} textColorClass="text-info" >Test Label link</LabelLink>
  );

  const button = getByRole('button');

  fireEvent.click(button)
  expect(mockFn.mock.calls.length).toEqual(1);

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Test Label link');

  expect(container.childNodes[0].firstChild).toMatchInlineSnapshot(`
    <button
      class="appearance-none text-sm  text-info focus:outline-none"
      type="button"
    >
      Test Label link
    </button>
  `);
});

test('Render the LabelLink without textColorClass correctly', () => {
  const { getByRole } = render(
    <LabelLink>Test Label link</LabelLink>
  );

  const button = getByRole('button');
  expect(button).toHaveClass('text-neutral-medium');
});
