import { render } from '@testing-library/react';
import BgImage from '~/components/BgImage';

test('Render the background image', () => {
  const { container, getByAltText } = render(<BgImage />);
  expect(getByAltText('background_image')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="absolute w-full h-full z-0"
    >
      <img
        alt="background_image"
        class="object-cover w-full h-full"
        src="/images/bg_image.png"
      />
    </div>
  `);
});
