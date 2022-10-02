import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes:Routes = [
  { path: 'inicio', component: AppComponent },
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
