import { render } from '@testing-library/react';
import LabelLink from '~/components/LabelLink';

test('Render the LabelLink correctly', () => {
  const { container, getByRole } = render(<LabelLink>Test Label link</LabelLink>);
  expect(getByRole('button')).toBeInTheDocument()
  expect(getByRole('button')).toHaveTextContent('Test Label link');
  expect(container.childNodes[0].firstChild).toMatchInlineSnapshot(`
    <button
      class="appearance-none text-sm  text-neutral-medium focus:outline-none"
      type="button"
    >
      Test Label link
    </button>
  `);
});
