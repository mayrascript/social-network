import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomErrorStateMatcher } from 'apps/social-network/src/app/core/helpers/error-state-matcher';
import { User } from 'apps/social-network/src/app/core/models/user.model';
import { AuthService } from 'apps/social-network/src/app/core/services/auth/auth.service';
import { NotificationsService } from 'apps/social-network/src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'social-network-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  matcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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

  login() {
    const {email, password} = this.loginForm.value as User;
    // TODO: integrate service
    this.authService.login(email, password)
      .subscribe(
        (res) => {
        this.notificationsService.showMessage('Bienvenido!');
        this.goToDashboard();
      },
        (err) => {
          if(err.status === 401) {
            this.notificationsService.showMessage('Credenciales inválidas');
          }else{
            this.notificationsService.showMessage('Ha ocurrido un problema');
          }
        })

  }

  goToDashboard = () => this.router.navigate(['/dashboard']);

}
