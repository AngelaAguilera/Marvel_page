import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User;
  loginForm: FormGroup;

  constructor(
    private userService: UsersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public getUser(): void {
    const user = this.loginForm.value;
    this.userService.getUser(user).subscribe((res) => this.user = res);
  }

}
