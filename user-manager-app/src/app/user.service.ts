import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private urlBase = "http://localhost:8080/api/users"
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.urlBase);
  }

  addUser(user: User): Observable<Object>{
    return this.httpClient.post(this.urlBase, user);
  }

  getUserByUsername(username: string){
    return this.httpClient.get<User>(`${this.urlBase}/${username}`)
  }

  modifyUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.urlBase}/${id}`, user);

  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlBase}/${id}`);
  }
  
}
