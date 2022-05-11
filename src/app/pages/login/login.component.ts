import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }

  constructor(private snack:MatSnackBar, private login:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username == null || this.loginData.username.trim() == ''){
      this.snack.open("Username is required", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.loginData.password == null || this.loginData.password.trim() == ''){
      this.snack.open("Username is required", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        console.log("success");

        //login
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any) => {
            this.login.setUser(user);
            console.log(user);
            //redirect : ADMIN: admin dashboard
            //redirect : USER: user dashboard
            if(this.login.getUserRole() == 'ADMIN'){
              //admin dashboard
              window.location.href="/admin"
            }else if(this.login.getUserRole() == 'USER'){
              //user dashboard
              window.location.href="/user/0"
            }else{
              //no roles
              this.login.logout();
              location.reload();
            }
          }
        )
      },
      (error) => {
        console.log(error);
        console.log("error");
        this.snack.open("Inavlid Details", '',{
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    )

    }
  }

