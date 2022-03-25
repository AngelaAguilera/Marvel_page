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

  usersLogin: User[];
  loginForm: FormGroup;

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public getUser(): void {
    const user = this.loginForm.value;
    if(this.loginForm.valid){
      this.userService.getUser(user).subscribe((res) => {
        this.usersLogin = res;
        if(this.usersLogin.length > 0 ){
          //crear almacenamiento en localStorage
          localStorage.removeItem('type');
          localStorage.setItem('type', this.usersLogin[0].type);
          //Fin almacenamiento en localStorage
          this.router.navigate(["/main",'cart']);
        }else{
          alert('The credentials are not valid, please try again');
          this.loginForm.reset();
        }
      });
    } else {
      alert('Enter credentials to sign in');
    }
  }

}
