import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      user: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
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
          localStorage.setItem('name', (this.usersLogin[0].firstName).toString());
          localStorage.setItem('userId', (this.usersLogin[0].id).toString());
          localStorage.setItem('email', (this.usersLogin[0].email).toString());
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

  //Validadores de errores
  loginFormControl(loginControl): FormControl {
    return this.loginForm.controls[loginControl] as FormControl;
  }

  oneLoginFormControl(loginControl, error) {
    return this.loginForm.get(loginControl).hasError(error);
  }

}
