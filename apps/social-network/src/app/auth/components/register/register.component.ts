import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomErrorStateMatcher } from 'apps/social-network/src/app/core/helpers/error-state-matcher';
import { User } from 'apps/social-network/src/app/core/models/user.model';
import { AuthService } from 'apps/social-network/src/app/core/services/auth/auth.service';
import { SnackbarComponent } from 'apps/social-network/src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'social-network-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  matcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [
        Validators.required,
      ]],
      lastName: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]],
    })
  }

  register() {
    const user = this.registerForm.value as User;
    console.log(user);
    this.authService.register(user)
      .subscribe(
        (res) => this.showMessage('Usuario creado exitosamente'),
        (err) => {
          console.log(err)
          this.showMessage('Ha ocurrido un error')
        }
        )
  }

  showMessage(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      data: {message}
    });
  }

}
