import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'ajith@example.com',
    description: 'Registered email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'MySecurePassword123!',
    description: 'User password in plain text (should be hashed on backend)',
  })
  @IsString()
  password: string;
}
