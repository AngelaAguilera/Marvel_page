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

  userForm: User[];
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
    if(this.loginForm.dirty){
      this.userService.getUser(user).subscribe((res) => {
        this.userForm = res;
        if(this.userForm.length > 0 ){
          this.router.navigate(["/main",'home']);
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
