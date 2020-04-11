import {
  Module,
} from '@nestjs/common';
import { JwtStrategy } from 'apps/api/src/app/auth/strategies/jwt-strategy';
import { LocalStrategy } from 'apps/api/src/app/auth/strategies/local-strategy';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
