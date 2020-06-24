import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';

import SignIn from '../../pages/SignIn';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

describe('SignIn page', () => {
  it('should be able to sign in', async () => {
    const { getByText, getByPlaceholder } = render(<SignIn />);

    const emailField = getByPlaceholder('E-mail');
    const passwordField = getByPlaceholder('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.changeText(emailField, 'johndoe@example.com');
    fireEvent.changeText(passwordField, '123456');

    fireEvent.press(buttonElement);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('SignUp');
    });
  });
});
