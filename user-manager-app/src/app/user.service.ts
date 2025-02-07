import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private urlBase = "http://localhost:8080/api/users"
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.urlBase).pipe(
      catchError(this.handleError)
    );
  }

  addUser(user: User): Observable<Object>{
    return this.httpClient.post(this.urlBase, user).pipe(
      catchError(this.handleError)
    );
  }

  getUserByUsername(username: string){
    return this.httpClient.get<User>(`${this.urlBase}/${username}`).pipe(
      catchError(this.handleError)
    );
  }

  modifyUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.urlBase}/${id}`, user).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlBase}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      if (error.status === 400) {
        errorMessage = `Bad Request: ${error.error}`;
      } else if (error.status === 404) {
        errorMessage = `Not Found: ${error.error}`;
      } else {
        errorMessage = `Error de servidor: ${error.status}, ${error.statusText}`;
      }
    }
    return throwError(() => new Error(errorMessage));
  }

}
