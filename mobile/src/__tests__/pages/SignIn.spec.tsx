import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';

import SignIn from '../../pages/SignIn';

const mockedSignIn = jest.fn();

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
  }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigation: jest.fn(),
  }),
}));

describe('SignIn page', () => {
  it('should be able to sign in', async () => {
    const { getByText, getByPlaceholder } = render(<SignIn />);

    const emailField = getByPlaceholder('E-mail');
    const passwordField = getByPlaceholder('Senha');
    const buttonElement = getByText('Entrar');

    const email = 'johndoe@example.com';
    const password = '123456';

    fireEvent.changeText(emailField, email);
    fireEvent.changeText(passwordField, password);

    fireEvent.press(buttonElement);

    await waitFor(() => {
      expect(mockedSignIn).toHaveBeenCalledWith({ email, password });
    });
  });
});
