// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Make sure this line is present
  { path: 'client-creation', component: ClientCreationComponent },
  { path: 'client-meetings', component: ClientMeetingsComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown paths to ''
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
