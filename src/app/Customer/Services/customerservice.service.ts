import { Injectable } from '@angular/core';
import { Icustomer } from '../Models/icustomer';
import {HttpHeaders} from '@angular/common/http'
import {HttpClient} from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.
import { TransactionDetails } from '../Models/transaction-details';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerserviceService {
  
  url = 'http://localhost:16553/api/customer'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  postCustomer(cdata:Icustomer):Observable<Icustomer> {
    console.log("cdata from service", cdata)
    return this.httpclient.post<Icustomer>(this.url+'/',cdata,this.httpOptions).pipe(catchError(this.handleError))
  }

  loginCustomer(loginInfo:Icustomer):Observable<Icustomer> {
    return this.httpclient.post<Icustomer>(this.url + '/validate' ,loginInfo,this.httpOptions).pipe(catchError(this.handleError))
  }

  getWalletStatement(cId:number):Observable<any> {
    return this.httpclient.get<any>(this.url+'/wallet/'+cId).pipe(catchError(this.handleError))
  }

  getCustomer(cId:number):Observable<Icustomer> {
    return this.httpclient.get<Icustomer>(this.url + '/' + cId).pipe(catchError(this.handleError))
  }
  editCustomer(cdata:Icustomer):Observable<TransactionDetails> {
    return this.httpclient.put<TransactionDetails>(this.url + '/editcust/' + cdata.customerId, cdata, this.httpOptions).pipe(catchError(this.handleError))
  }

  changePass(changePassQuery:any): Observable<any> {
    return this.httpclient.put<any>(this.url+'/changepassword', changePassQuery, this.httpOptions).pipe(catchError(this.handleError))
  }
  

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = ''
    errormessage = error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage);
  }
}
