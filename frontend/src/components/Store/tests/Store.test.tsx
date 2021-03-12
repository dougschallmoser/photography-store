import { render, screen } from '../../../test-utils/testing-library-utils';
import Store from '../';
import userEvent from '@testing-library/user-event';

describe('product button works properly', () => {
  test('product buttons are initially disabled', () => {
    render(<Store />)

    const productButtons = screen.getAllByRole('button', { name: /add to cart/i })
    expect(productButtons).toHaveLength(12)
    expect(productButtons[0]).toBeDisabled()
  })

  test('product button is enabled when size is selected', () => {
    render(<Store />)

    const firstProductSize = screen.getAllByRole('combobox')[0]
    userEvent.selectOptions(firstProductSize, ['5x7'])
    const firstProductBtn = screen.getAllByRole('button', { name: /add to cart/i })[0]
    expect(firstProductBtn).toBeEnabled()
  })
})