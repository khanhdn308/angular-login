import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    if (authService.isLoggedIn()) {
      router.navigate(['/main']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    if (this.authService.login(this.loginForm.value)) {
      localStorage.setItem('ACCESS_TOKEN', 'access_token');
      localStorage.setItem('CURRENT_USER', this.loginForm.value.username);

      this.router.navigateByUrl('/main');
    } else {
      alert('Wrong username or password');
    }
  }

}
