import { Controller, Post} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login')
  async login():Promise<any> {
    return true;
  }

  // Add refresh-token endpoint if needed
}