// src/auth/__mocks__/auth.mocks.ts

export const mockLoginRequest = {
  email: 'test@example.com',
  password: 'password',
};

export const mockUser = {
  id: 1,
  email: 'test@example.com',
  password: 'hashedPassword123',
  roles: ['admin'],
};

export const mockLoginResponse = {
  accessToken: 'mockedAccessToken',
};

export const mockAuthService = {
  login: jest.fn().mockResolvedValue(mockLoginResponse),
  validateUser: jest.fn().mockResolvedValue(mockUser),
};
