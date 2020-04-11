import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestService } from 'apps/social-network/src/app/core/services/api/request.service';
import { environment } from 'apps/social-network/src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl: string;

  constructor(
    protected http: HttpClient,
    private request: RequestService,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public delete<T>(url: string, options?: any, withTokenHeader = false): Observable<T | ArrayBuffer>  {
    const headers = withTokenHeader ? this.request.getBearerHeader() : this.request.getJsonHeader();
    options = { headers: headers, ...options };

    return this.http.delete(`${this.apiUrl}${url}`, options)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public get<T>(url: string, options?: any, withTokenHeader = false): Observable<T> {
    const headers = withTokenHeader ? this.request.getBearerHeader() : this.request.getJsonHeader();
    options = { headers: headers, ...options };

    return this.http.get(`${this.apiUrl}${url}`, options)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public patch<T>(url: string, body: any, options?: any, withTokenHeader = false): Observable<T> {
    const headers = withTokenHeader ? this.request.getBearerHeader() : this.request.getJsonHeader();
    options = { headers: headers, ...options };

    return this.http.patch(`${this.apiUrl}${url}`, body, options)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public post<T>(url: string, body: any, options?: any, withTokenHeader = false): Observable<T> {
    const headers = withTokenHeader ? this.request.getBearerHeader() : this.request.getJsonHeader();
    options = { headers: headers, ...options };

    return this.http.post(`${this.apiUrl}${url}`, body, options)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public postForFile<T>(url: string, body: any, options?: any, withTokenHeader = false): Observable<T> {
    const headers = withTokenHeader ? this.request.getBearerHeader() : this.request.getJsonHeader();
    options = { headers: headers, ...options };
    console.log('options', options);
    console.log('headers', options.params);

    return this.http.post(`${this.apiUrl}${url}`, body, options)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public put<T>(url: string, body: any, options?: any, withTokenHeader = false): Observable<T> {
    const headers = withTokenHeader ? this.request.getBearerHeader() : this.request.getJsonHeader();
    options = { headers: headers, ...options };

    return this.http.put(`${this.apiUrl}${url}`, body, options)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  private extractData<T>(res): any  {
    try {
      return res.json();
    } catch (e) {
      return res;
    }
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ha ocurrido un error', error);
    let msgError;

    if (error.error && error.error.message) {
      msgError = error.error.message;
    } else if (error.error) {
      msgError = error.error;
    }else {
      msgError = error;
    }

    return throwError({message: msgError, status: error.status});

  }
}
