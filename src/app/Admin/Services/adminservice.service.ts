import { Injectable } from '@angular/core';
import { Iadmin } from '../Models/iadmin';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {
  
  url = 'http://localhost:16553/api/admin'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}
  
  constructor(private httpclient:HttpClient) { }

 loginAdmin(loginInfo:Iadmin):Observable<Iadmin> {
  return this.httpclient.post<Iadmin>(this.url + '/validate' ,loginInfo,this.httpOptions).pipe(catchError(this.handleError))
 }

 // method to handle errors in client side
 handleError(error: HttpErrorResponse) {
  let errormessage = ''
  errormessage = error.status+'\n'+error.statusText+'\n'+error.error
  alert(errormessage)
  return throwError(errormessage);
  }
}
