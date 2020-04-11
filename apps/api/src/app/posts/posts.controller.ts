import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { PostDto } from 'apps/api/src/app/posts/dtos/post.dto';
import { PostsService } from 'apps/api/src/app/posts/posts.service';
import { Response } from 'express';

@Controller('posts')
export class PostsController {

  constructor(private postsService: PostsService) {

  }

  @Post('')
  public async create(@Res() res: Response, @Body() postDto: PostDto){
    const result = await this.postsService.create(postDto);
    if(result && Object.keys(result).length > 0) {
      return res.status(HttpStatus.OK).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Patch('/:id')
  public async update(@Res() res: Response, @Param('id') id, @Body() postDto: PostDto){
    const result = await this.postsService.update(id, postDto);
    if(result && Object.keys(result).length > 0) {
      return res.status(HttpStatus.OK).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Get('')
  public async getAll(@Res() res: Response){
    const result = await this.postsService.findAll();
    if(result) {
      return res.status(HttpStatus.OK).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Get('/:id')
  public async getById(@Res() res: Response, @Param('id') id){
    const result = await this.postsService.findById(id);
    if(result && Object.keys(result).length > 0) {
      return res.status(HttpStatus.OK).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }
}
