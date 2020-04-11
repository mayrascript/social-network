export interface Post {
  _id?: string;
  comment?: string;
  public?: 'all' | 'friends'
}
