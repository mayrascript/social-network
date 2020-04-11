import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostDto } from 'apps/api/src/app/posts/dtos/post.dto';
import { IPostService } from 'apps/api/src/app/posts/interfaces/post-service.interface';
import { IPost } from 'apps/api/src/app/posts/interfaces/post.interface';
import {Model} from 'mongoose';

@Injectable()
export class PostsService implements IPostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<IPost>) {}
  async findAll(): Promise<IPost[]> {
    return await this.postModel.find().exec();
  }

  async findOne(options: object): Promise<IPost> {
    return await this.postModel.findOne(options).exec();
  }

  async findById(id: string): Promise<IPost> {
    return await this.postModel.findById(id).exec();
  }
  async create(postDto: PostDto): Promise<IPost> {
    const createdPost = new this.postModel(postDto);
    return await createdPost.save();
  }

  async update(id: string, newValue: IPost): Promise<IPost> {
    const post = await this.postModel.findById(id).exec();

    if(!post) {
      // TODO: implement validation
    }

    await this.postModel.findByIdAndUpdate(id, newValue).exec();
    return await this.postModel.findById(id).exec();
  }
  async delete(id: string): Promise<string> {
    try {
      await this.postModel.findByIdAndRemove(id).exec();
      return 'The post has been deleted';
    }
    catch (err) {
      return 'The post could not be deleted';
    }
  }
}
