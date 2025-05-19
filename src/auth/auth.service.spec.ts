import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { mockUser } from './__mocks__/auth.mocks';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('mockedAccessToken'),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should return accessToken for valid user', async () => {
    const user = mockUser;
    const result = await service.login(user);

    expect(result).toEqual({ accessToken: 'mockedAccessToken' });
    expect(jwtService.sign).toHaveBeenCalledWith({
      sub: 1,
      email: 'test@example.com',
      roles: ['admin'],
    });
  });
});
