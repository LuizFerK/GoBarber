import React from 'react';

import Input from '../../components/Input';
import { render, fireEvent, wait } from '@testing-library/react';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      }
    }
  }
})

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="Email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="Email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await wait(() => {
      expect(inputContainer).toHaveStyle('border-color: #ff9000;')
      expect(inputContainer).toHaveStyle('color: #ff9000;')
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(inputContainer).not.toHaveStyle('border-color: #ff9000;')
      expect(inputContainer).not.toHaveStyle('color: #ff9000;')
    });
  })

  it('should keep input border highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="Email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'jhondoe@example.com' },
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(inputContainer).toHaveStyle('color: #ff9000;')
    });
  })
});
