import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface SnackBarData {
  message: string;
}

@Component({
  selector: 'social-network-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) { }

  ngOnInit(): void {
  }

}
