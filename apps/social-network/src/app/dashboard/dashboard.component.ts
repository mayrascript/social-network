import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Post } from 'apps/social-network/src/app/core/models/post.model';
import { AuthService } from 'apps/social-network/src/app/core/services/auth/auth.service';
import { NotificationsService } from 'apps/social-network/src/app/core/services/notifications/notifications.service';
import { PostsService } from 'apps/social-network/src/app/core/services/posts/posts.service';
import { ConfirmationDialogComponent } from 'apps/social-network/src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'social-network-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  post: Post;

  posts: Post[] = [];

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private postsService: PostsService,
              private notificationsService: NotificationsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAll()
      .subscribe((posts) => this.posts = posts);
  }

  onEditPostInForm(post: Post) {
    this.post = post;
  }

  onCreatePost(post: Post) {
    this.postsService.create(post)
      .subscribe(() => {
        this.posts = [...this.posts].concat(post);
        this.notificationsService.showMessage('Publicación creada exitosamente');
      }, () => this.notificationsService.showMessage('Ha ocurrido un problema'));
  }

  onEditPost(post: Post) {
    this.postsService.update(post._id, post)
      .subscribe((updated) => {
        this.notificationsService.showMessage('Publicación actualizada exitosamente');
        this.posts = this.posts.map(p => {
          if(p._id === post._id) {
            return updated;
          } else {
            return p;
          }
        });
      }, () => this.notificationsService.showMessage('Ha ocurrido un problema'));
  }

  onDeletePost(postId: string) {
    this.postsService.remove(postId)
      .subscribe(() => {
        this.posts = [...this.posts].filter(post => post._id !== postId);
        this.notificationsService.showMessage('Publicación eliminada exitosamente');
      }, () => this.notificationsService.showMessage('Ha ocurrido un problema'));
  }

  confirmLogout() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {title: 'Confirmación', question: '¿Desea cerrar sesión?'}
    });

    dialogRef.afterClosed().subscribe((result) => result && this.logout());
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
