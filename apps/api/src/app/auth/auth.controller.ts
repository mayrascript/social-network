import { Controller, UseGuards, HttpStatus, Res, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'apps/api/src/app/users/dtos/create-user.dto';
import { LoginUserDto } from 'apps/api/src/app/users/dtos/login-user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';

import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly usersService: UsersService) {}

  @Post('register')
  public async register(@Res() res: Response, @Body() createUserDto: CreateUserDto){
    const result = await this.authService.register(createUserDto);
    if (!result.success){
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  public async login(@Res() res: Response, @Body() login: LoginUserDto){
    return await this.usersService.findOne({ username: login.email}).then(user => {
      if (!user) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'User Not Found',
        });
      } else {
        const {accessToken} = this.authService.createToken(user);
        return res.status(HttpStatus.OK).json({accessToken, user});
      }
    });
  }
}
