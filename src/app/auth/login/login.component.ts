import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  constructor( private authService: AuthService,
               private router: Router) { }

  ngOnInit() {}

  onLogin(): void {
    this.authService.login();
    console.log( 'Login component onLogin() : getAuthStatus=' + this.authService.getAuthStatus());
  }
}
