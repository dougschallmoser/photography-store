import { render, screen } from '../../../test-utils/testing-library-utils';
import App from '..';

test('loading widget displays before image finishes loading', async () => {
  render(<App />)
  
  const loader = screen.getByTestId('loader')
  expect(loader).toBeInTheDocument()

  const hiddenSplashImage = screen.getByAltText('Mountain')
  expect(hiddenSplashImage).not.toBeVisible()
})