import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ComposeComponent } from './compose/compose.component';
import { ManageComponent } from './manage/manage.component';
import { MessageComponent } from './manage/message/message.component';

// App routes definition
const routes: Routes = [
  {path:'auth',canActivate:[AuthGuard],component:AuthComponent},
  {path:'compose',canActivate:[AuthGuard],component:ComposeComponent},
  {path:'manage',canActivate:[AuthGuard],component:ManageComponent, children: [
    {path:':id',canActivate:[AuthGuard],component:MessageComponent}
  ]},
  {path:'**',redirectTo:'/compose'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}