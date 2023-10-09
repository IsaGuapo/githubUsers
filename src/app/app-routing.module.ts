import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserviewComponent } from './components/userview/userview.component';

const routes: Routes = [
  {path:"", pathMatch: 'full', redirectTo: 'home'},
  {path:"home", component: HomeComponent},
  {path:"user/:userlogin", component: UserviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
