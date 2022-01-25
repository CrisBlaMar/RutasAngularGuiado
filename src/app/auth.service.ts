import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

 
@Injectable(
)
export class AuthService {
 
  constructor(private httpClient: HttpClient){}
  
  loggedIn = false;
 
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  private baseUrl: string = environment.baseUrl; 

  login(email:string, password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'email': email,
      'password': password 
    }
    return this.httpClient.post(url, body);
  }


  /**Método para obtener el token */
  obtenerToken(){
    return JSON.parse(<string>localStorage.getItem("token"));
  }

}