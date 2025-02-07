import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-user',
  standalone: false,
  templateUrl: './modify-user.component.html',
  styleUrl: './modify-user.component.css'
})
export class ModifyUserComponent {
  user: User = new User();
  username: string;
  id: number;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    this.username = this.route.snapshot.params['username'];
    this.userService.getUserByUsername(this.username).subscribe(
      {
        next: (data) => {this.user = data,
          this.id = this.user.id
        },
        error:(error: any) => console.log(error)
      }
    );
  }
  onSubmit(){
    this.saveUser();
  }

  saveUser(){
    this.userService.modifyUser(this.id, this.user).subscribe(
      {
        next: (data) => this.goHome(),
        error: (error) => console.log(error)
      }
    );
  }

  goHome(){
    this.router.navigate(['/users']);
  }
}
