import { render } from '@testing-library/react';
import Label from '~/components/Label';

test('Render the Label text with textColorClass correctly', () => {
  const { container } = render(<Label textColorClass="text-info">Test Label</Label>);
  expect(container.firstChild).toHaveTextContent('Test Label');
  expect(container.firstChild).toMatchInlineSnapshot(`
    <p
      class="text-sm  text-info"
    >
      Test Label
    </p>
  `);
});

test('Render the Label text without textColorClass correctly', () => {
  const { container } = render(<Label>Test Label</Label>);
  expect(container.firstChild).toHaveClass('text-neutral-medium');
});
