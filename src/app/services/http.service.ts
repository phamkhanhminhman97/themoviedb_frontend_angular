import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, Observer, throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': this.hasToken()
    }),
  };


  constructor(private _http: HttpClient,
    private _router: Router,
    private _userService: UserService) { }

  hasToken() {
    // // create authorization header with jwt token
    // const currentUser = this._userService.getProfile();
    // // const lang = localStorage.getItem('currentLanguage');
    // if (currentUser && currentUser.access_token) {
    //   const headers = new Headers({
    //     'x-access-token': currentUser.access_token,
    //     // 'Accept-Language': lang,
    //   });
    //   return currentUser.access_token;
    // }
    // return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIn0sImlhdCI6MTYyMDI5OTk2NywiZXhwIjoxNjIwMzAzNTY3fQ.oV9gi0VbjOEeoeUaAzzMRJrN7P9T-FeGSqFd5HNOaGc';
  }

  /**
   * get method
   * @param path : url
   */
  getHttp(url: string, token = false): Observable<any> {
    const self = this;
    return this._http.get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * get method
   * @param path : url
   */
  postHttp(url: string, body: Object, token = false): Observable<any> {
    const self = this;
    return this._http.post(url, body, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  /**
   * Handle exception
   * @param  {any}    error [array]
   * @return {[String]}    Info err.
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}