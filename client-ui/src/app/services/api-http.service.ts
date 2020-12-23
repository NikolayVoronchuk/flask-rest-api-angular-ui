import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  private API_URL = 'http://localhost:5000';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  postSelectedDevices(selectedDevices: string[]): Observable<any> {
    return this.http.post(`${this.API_URL}/devices/selected`, {selectedDevices}).pipe(
      catchError(this.handleError)
    );
  }

  getSelectedDevices(): Observable<any> {
    return this.http.get(`${this.API_URL}/devices/selected`);
  }

  getConnectedDevices(): Observable<any> {
    return this.http.get(`${this.API_URL}/devices/connected`);
  }
}
