import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PublicEnum } from 'apps/social-network/src/app/core/enums/public.enum';
import { Post } from 'apps/social-network/src/app/core/models/post.model';

@Component({
  selector: 'social-network-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnChanges {
  @Input() posts: Post[] = [];

  @Output() editPost = new EventEmitter<Post>();
  @Output() deletePost = new EventEmitter<string>();

  friendPosts = [];
  publicPosts = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes.posts && changes.posts.currentValue) {
      // TODO: review better implementation
      this.friendPosts = this.posts.filter(i => i.public === PublicEnum.Friends);
      this.publicPosts = this.posts.filter(i => i.public === PublicEnum.All);
    }
  }

  onEditPost(post: Post) {
    this.editPost.emit(post);
  }

}
