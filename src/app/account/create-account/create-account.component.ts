import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { OnExit } from 'src/app/guards/go-out-page.guard';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, OnExit {

  accountForm: FormGroup;
  respuesta: string = '';

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/), Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      user: ['', Validators.required],
      password: ['', Validators.required],
      type: ['user']
    })
  }

  public createAccount(): void{
    const user = this.accountForm.value;

    if(this.accountForm.valid){
      this.userService.getUserEmail(user).subscribe(res => {
        if(res.length > 0){
          alert('This email is already in use');
        } else {
          this.userService.getUserName(user).subscribe (res => {
            if(res.length > 0){
              alert('This username is already in use');
            } else {
              this.userService.postUser(user).subscribe(res =>{
              console.log(res);
              this.router.navigate(['/login']);
              });
            }
          })
        }
      });
    } else {
      alert('Please enter the information required');
    }
  }

  //pregunta al usuario si quiere salir
  onExit() {
    if(this.accountForm.dirty){
      return confirm("Do you really want to go out without sign up?");
    }
    return true;
  }

}
