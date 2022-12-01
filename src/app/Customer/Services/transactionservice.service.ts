import { Injectable } from '@angular/core';
import { Itransactionres } from '../Models/itransactionres';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipassengerdet } from '../Models/ipassengerdet';
import { ICreatetransactionrequest } from '../Models/icreatetransactionrequest';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TransactionserviceService {  

  url='http://localhost:16553/api/transaction'
  httpOptions=  {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }
    
  getTransactiondet(customerId:number):Observable<Itransactionres> {
    return this.httpclient.get<Itransactionres>(this.url+'/'+customerId).pipe(catchError(this.handleError))
  }

  getPassenger(tId:number):Observable<Ipassengerdet> {
    return this.httpclient.get<Ipassengerdet>(this.url + '/passengers/' + tId).pipe(catchError(this.handleError))
  }
  
  createTransaction(req : ICreatetransactionrequest):Observable<any> {
      return this.httpclient.post<any>(this.url,req, this.httpOptions).pipe(catchError(this.handleError))
  }

  cancelTransaction(tId:number):Observable<any> {
    return this.httpclient.delete<any>(this.url+'/'+tId).pipe(catchError(this.handleError))
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = ''
    errormessage = error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage);
  }
}
