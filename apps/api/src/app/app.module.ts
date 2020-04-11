import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'apps/api/src/app/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/social_network_db'),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
