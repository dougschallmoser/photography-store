import { render, screen } from '../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Routes from '../routes';

test('order print for happy path', () => {
  render(<Routes />)

  // click on Store nav link
  const storeLink = screen.getByRole('link', { name: /store/i })
  userEvent.click(storeLink)

  // add first product to cart
  const firstProductSize = screen.getAllByRole('combobox')[0]
  const addProductBtn = screen.getAllByRole('button', { name: /add to cart/i })[0]
  userEvent.selectOptions(firstProductSize, ['5x7'])
  userEvent.click(addProductBtn)

  // click on Cart nav link
  const cartLink = screen.getByRole('link', { name: /cart/i })
  userEvent.click(cartLink)

  // assert product is in cart
  const productHeading = screen.getByRole('heading', { name: 'Sky Vibrancy' })
  const sizeHeading = screen.getByRole('heading', { name: /5x7/i })
  expect(productHeading).toBeInTheDocument()
  expect(sizeHeading).toBeInTheDocument()
})