import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

export const PostSchema = new mongoose.Schema({
  comment: String,
  public: String,
});
