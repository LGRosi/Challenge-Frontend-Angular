import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components:
import { AddUserComponent } from './components/add-user/add-user.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: '**',
    redirectTo: 'table'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
