
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtomListComponent } from "./atom-list/atom-list.component";
import { AtomDetailsComponent } from "./atom-details/atom-details.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'atoms',
    component: AtomListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'atoms/:id',
    component: AtomDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/atoms',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
