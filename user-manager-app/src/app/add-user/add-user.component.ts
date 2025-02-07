import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user: User = new User();

  constructor(private userService: UserService,
    private router: Router){}

  onSubmit(){
    this.saveUser();
  }

  saveUser(){
    this.userService.addUser(this.user).subscribe(
      {
        next: (datos) => {
          this.goHome();
        },
        error: (error: any) => {console.log(error)} 
      }
    );
  }

  goHome(){
    this.router.navigate(['/users']);
  }
}
