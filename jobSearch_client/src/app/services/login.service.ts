// import { course } from '../models/course';
import {HttpClient} from '@angular/common/http'
import { Injectable, Type } from '@angular/core';
// import { type } from '../models/type';
import { Observable, Observer } from 'rxjs';
import {User} from '../models/User'
@Injectable({
   providedIn: 'root'  })

export class loginService {
  constructor(private http:HttpClient) { 
  }

    getUserFromServer( UserName:string,Password:string):Observable<any>{
     return this.http.get(`https://localhost:7193/JobSearchServer/GetUserDetails?userName=${UserName}&password=${Password}`)
   }
}

