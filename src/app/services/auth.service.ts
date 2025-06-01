import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "https://localhost:7267/api/User/"
  constructor(private http:HttpClient) { }
  signUP(userObj:any){
    return this.http.post(`${this.baseUrl}register`,userObj);
  }
  login(loginObj:any){
 return this.http.post(`${this.baseUrl}authenticate`,loginObj);
  }
}
