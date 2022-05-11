import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user = {
    username:'',
    email:'',
    password:'',
    phone:'',
    first_name:'',
    last_name:'',
    about:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.user.username == null || this.user.username.trim() == ''){
      //alert("Username is required");
      this.snack.open('Username is required', '',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.first_name == null || this.user.first_name.trim() == ''){
      //alert("Username is required");
      this.snack.open('First name is required', '',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.last_name == null || this.user.last_name.trim() == ''){
      //alert("Username is required");
      this.snack.open('Last name is required', '',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.first_name == null || this.user.password.trim() == ''){
      //alert("Username is required");
      this.snack.open('Password is required', '',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.email == null || this.user.email.trim() == ''){
      //alert("Username is required");
      this.snack.open('Email is required', '',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Successfully Registered', 'Your username is ' + this.user.username, 'success')
      },
      (error) => {
        this.snack.open('Invalid Input', '',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      },
    )
  }

}
