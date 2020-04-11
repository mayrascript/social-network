import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostModel } from 'apps/social-network/src/app/core/models/post.model';
import { ConfirmationDialogComponent } from 'apps/social-network/src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'social-network-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: PostModel;

  @Output() editPost = new EventEmitter<PostModel>();
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
