import {HttpClient} from '@angular/common/http'
import { Injectable, Type } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/User';
@Injectable({
   providedIn: 'root'  })

export class loginService {
  constructor(private http:HttpClient) { 
  }

    getUserFromServer( UserName:string,Password:string):Observable<User>{
     return this.http.get<User>(`https://localhost:7193/users/GetUserDetails?userName=${UserName}&password=${Password}`)
   }
}

