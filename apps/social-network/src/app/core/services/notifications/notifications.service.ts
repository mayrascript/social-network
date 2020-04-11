import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'apps/social-network/src/app/core/services/notifications/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      data: {message}
    });
  }
}
