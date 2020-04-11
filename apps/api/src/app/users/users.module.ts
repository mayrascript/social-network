import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'apps/api/src/app/users/user.schema';
import { UsersController } from 'apps/api/src/app/users/users.controller';
import { UsersService } from 'apps/api/src/app/users/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class UsersModule {}
