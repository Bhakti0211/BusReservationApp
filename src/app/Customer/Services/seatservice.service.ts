import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http'; //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SeatserviceService {

  url = 'http://localhost:16553/api/bus/seatdetails';
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  getseats(busId:number):Observable<any> {
    return this.httpclient.get<any[]>(this.url + '/' + busId).pipe(catchError(this.handleError))  
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = ''
    errormessage = error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage);
  }
}
