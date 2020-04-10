import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'apps/social-network/src/app/core/models/post';
import { ConfirmationDialogComponent } from 'apps/social-network/src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'social-network-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;

  @Output() editPost = new EventEmitter<Post>();
  @Output() deletePost = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  confirmDeletePost(postId: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {title: 'Confirmación', question: '¿Desea eliminar ésta publicación?'}
    });

    dialogRef.afterClosed().subscribe((result) => result && this.deletePost.emit(postId));
  }

}
