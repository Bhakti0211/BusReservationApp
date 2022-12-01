import { Injectable } from '@angular/core';
import { Ibus } from '../Models/ibus'; //importing interface
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.
import { Isearchbus } from '../../Home Page/isearchbus';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusserviceService {

  url = 'http://localhost:16553/api/bus'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  //To get All the attributes of Bus.
  getBusList():Observable<any> {
    return this.httpclient.get<any[]>(this.url+'/list').pipe(catchError(this.handleError))
  }

  //To get details of particular Bus.
  getBus(busNo:any):Observable<Ibus> {
    console.log(busNo);
    return this.httpclient.get<Ibus>(this.url + '/detail/'+ busNo).pipe(catchError(this.handleError))
  }

  //To add Bus Details
  addBus(busdata:any):Observable<Ibus> {
    return this.httpclient.post<Ibus>(this.url + '/addbus',busdata, this.httpOptions).pipe(catchError(this.handleError))
  }

  //To edit Bus Details
  editBus(busdata:Ibus):Observable<Ibus> {
    return this.httpclient.put<Ibus>(this.url + '/editbus/' + busdata.busNo,busdata, this.httpOptions).pipe(catchError(this.handleError))
  }

  //To delete the Bus Details
  deleteBus(busNo:string):Observable<Ibus> {
    return this.httpclient.delete<Ibus>(this.url + '/deletebus/'+busNo,this.httpOptions).pipe(catchError(this.handleError))
  }

  // to search the avb buses
  searchBuses(searchquery:Isearchbus):Observable<any> {
    console.log(searchquery);
    return this.httpclient.post<any[]>(this.url + '/search', searchquery, this.httpOptions).pipe(catchError(this.handleError))
  }

  avbSeates(busNo:string):Observable<any> {
     return this.httpclient.get<any>(this.url + '/seatsavb/'+ busNo).pipe(catchError(this.handleError))
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = ''
    errormessage = error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage);
  }
}
