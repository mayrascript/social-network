import { IPost } from 'apps/api/src/app/posts/interfaces/post.interface';

export interface IPostService {
  findAll(): Promise<IPost[]>;
  findById(id: string): Promise<IPost | null>;
  findOne(options: object): Promise<IPost | null>;
  create(user: IPost): Promise<IPost>;
  update(id: string, newValue: IPost): Promise<IPost | null>;
  delete(id: string): Promise<string>;
}
