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
  const subtotalHeading = screen.getAllByRole('heading', { name: /30.00/i })[0]
  expect(productHeading).toBeInTheDocument()
  expect(sizeHeading).toBeInTheDocument()
  expect(subtotalHeading).toBeInTheDocument()

  // assert quantity is 1
  const quantity = screen.getByText(/qty: 1/i)
  expect(quantity).toBeInTheDocument()
  
  // click increase button and assert quantity is 2
  const increaseBtn = screen.getByRole('button', { name: '+' })
  userEvent.click(increaseBtn)
  const newQuantity = screen.getByText(/qty: 2/i)
  expect(newQuantity).toBeInTheDocument()

  // click decrease button and assert quantity is 1
  const decreaseBtn = screen.getByRole('button', {name: '−' })
  userEvent.click(decreaseBtn)
  expect(quantity).toBeInTheDocument()

  // click remove button and assert quantity is gone
  const removeBtn = screen.getByRole('img', { name: /trash/i })
  userEvent.click(removeBtn)
  expect(screen.queryByText('qty')).toBeNull()
})