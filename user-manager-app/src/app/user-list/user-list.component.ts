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

  constructor(private userService: UserService,
    private router: Router){}

  ngOnInit(){
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(
      (data => {
        this.users = data;
      })
    );
  }

  modifyUser(username: string){
    this.router.navigate(['modify-user',username]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(
      {
        next: (data) => this.getUsers(),
        error: (error) => console.log(error)
      }
    );
  }
}
