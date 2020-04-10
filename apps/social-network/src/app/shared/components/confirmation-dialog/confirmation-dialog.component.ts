import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  question: string;
}

@Component({
  selector: 'social-network-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();
  }

  agree() {
    this.dialogRef.close(true);
  }

}
