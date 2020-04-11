import { Component, OnInit } from '@angular/core';
import { PostModel } from 'apps/social-network/src/app/core/models/post.model';

@Component({
  selector: 'social-network-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  post: PostModel;

  posts: PostModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onEditPostInForm(post: PostModel) {
    this.post = post;
  }

  onCreatePost(post: PostModel) {
    // TODO: implement service
    this.posts = [...this.posts].concat(post);
  }

  onEditPost(post: PostModel) {
    // TODO: implement service
  }

  onDeletePost(postId: string) {
    // TODO: implement service
  }

}
