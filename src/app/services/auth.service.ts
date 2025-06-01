import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "https://loginauthnticate.runasp.net/"
  constructor(private http:HttpClient) { }
  signUP(userObj:any){
    return this.http.post(`${this.baseUrl}register`,userObj);
  }
  login(loginObj:any){
 return this.http.post(`${this.baseUrl}authenticate`,loginObj);
  }
}
