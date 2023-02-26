import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes:Routes = [
  { path: 'intro', component: IntroComponent, pathMatch: "full" },
  { path: 'portfolio', component: PortfolioComponent, pathMatch: "full"},
  { path: '', component: IntroComponent },
  { path: '**', component: IntroComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
