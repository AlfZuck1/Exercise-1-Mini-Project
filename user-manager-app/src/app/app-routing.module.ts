import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: '', redirectTo: 'users', pathMatch:'full'},
  {path: 'add-user', component: AddUserComponent},
  {path: 'modify-user/:username', component: ModifyUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
