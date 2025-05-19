import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { mockLoginRequest, mockUser } from './__mocks__/auth.mocks';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest
              .fn()
              .mockResolvedValue({ accessToken: 'mockedAccessToken' }),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should return accessToken from login()', async () => {
      const req = {
        user: mockUser,
      };
      const result = await controller.login(mockLoginRequest, req as any);

      expect(result).toEqual({ accessToken: 'mockedAccessToken' });
      expect(authService.login).toHaveBeenCalledWith(req.user);
    });

    it('should throw UnauthorizedException if req.user is missing', async () => {
      const req = {}; // no user
  
      await expect(controller.login(mockLoginRequest, req as any)).rejects.toThrow(UnauthorizedException);
    });
  });
});
