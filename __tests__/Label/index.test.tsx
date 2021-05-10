import { render } from '@testing-library/react';
import Label from '~/components/Label';

test('Render the Label text correctly', () => {
  const { container } = render(<Label>Test Label</Label>);
  expect(container.firstChild).toHaveTextContent('Test Label');
  expect(container.firstChild).toMatchInlineSnapshot(`
    <p
      class="text-sm  text-neutral-medium"
    >
      Test Label
    </p>
  `);
});
