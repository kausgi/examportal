import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  //generate token

    public generateToken(loginData:any){
      return this.http.post(`${base_url}/generate_token`, loginData);
    }

    //get current user

    public getCurrentUser(){
      return this.http.get(`${base_url}/current_user`,);
    }

    //set token in local storage

    public loginUser(token:any){
      localStorage.setItem('token',token);
      return true;
    }

    //user is logged in or not

    public isLoggedIn(){
      let tokenStr = localStorage.getItem("token");
      if(tokenStr == null || tokenStr == '' || tokenStr == undefined){
        return false;
      }else{
        return true;
      }
    }

    //logout : remove token from local storage

    public logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return true;
    }

    //get token

    public get_token(){
      return localStorage.getItem('token');
    }

    // set user details

    public setUser(user:any){
      localStorage.setItem('user', JSON.stringify(user));
    }

    //get user

    public getUser(){
      let userStr = localStorage.getItem('user');
      if(userStr != null){
        return JSON.parse(userStr);
      }else{
        this.logout()
        return null;
      }
    }

    //get user role
    public getUserRole(){
      let user = this.getUser();
      return user.authorities[0].authority;
    }

}
