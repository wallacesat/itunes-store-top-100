import { render } from '@testing-library/react';
import MainPage from '~/components/MainPage';

test('Render the MainPage component correctly', () => {

  const { container } = render(
    <MainPage>
      <p>Test Main Page</p>
    </MainPage>
  );

  expect(container.firstChild).toContainHTML('<p>Test Main Page</p>');
});
