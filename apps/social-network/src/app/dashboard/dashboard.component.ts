import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostModel } from 'apps/social-network/src/app/core/models/post.model';
import { AuthService } from 'apps/social-network/src/app/core/services/auth/auth.service';
import { ConfirmationDialogComponent } from 'apps/social-network/src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'social-network-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  post: PostModel;

  posts: PostModel[] = [];

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private router: Router) { }

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
