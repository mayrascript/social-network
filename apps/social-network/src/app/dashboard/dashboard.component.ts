import { Component, OnInit } from '@angular/core';
import { Post } from 'apps/social-network/src/app/core/models/post';

@Component({
  selector: 'social-network-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  post: Post;

  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onEditPostInForm(post: Post) {
    this.post = post;
  }

  onCreatePost(post: Post) {
    // TODO: implement service
    this.posts = [...this.posts].concat(post);
  }

  onEditPost(post: Post) {
    // TODO: implement service
  }

  onDeletePost(postId: string) {
    // TODO: implement service
  }

}
