import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[];
  errorMessage: string= '';

  constructor(private userService: UserService,
    private router: Router){}

  ngOnInit(){
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(
      {
      next: (data) => this.users = data,
      error: (error) => this.errorMessage = error.message
      }
    );
  }

  modifyUser(username: string){
    this.router.navigate(['modify-user',username]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(
      {
        next: (data) => this.getUsers(),
        error: (error) => this.errorMessage = error.message
      }
    );
  }
}
