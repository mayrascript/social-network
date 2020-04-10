import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'apps/social-network/src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'social-network-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Output() deletePost = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  confirmDeletePost() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {title: 'Confirmación', question: '¿Desea eliminar ésta publicación?'}
    });

    dialogRef.afterClosed().subscribe((result) => result && this.deletePost.emit(result));
  }

}
