import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccessRequestModule } from './access-request/access-request.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [AuthModule, UsersModule, AccessRequestModule, AuditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
