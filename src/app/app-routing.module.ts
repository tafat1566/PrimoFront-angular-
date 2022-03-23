import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateMembreComponent } from './create-membre/create-membre.component';
import { PlusLoinComponent } from './plus-loin/plus-loin.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'basic', component: BasicComponent},
  {path: 'autres', component: PlusLoinComponent},
  {path: 'new-membre',component: CreateMembreComponent},
  {path: 'todo',component: TodoComponent},
  {path: 'login',component: ConnexionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
