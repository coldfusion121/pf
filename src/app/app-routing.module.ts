import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes:Routes = [
  { path: 'portfolio', component: PortfolioComponent, pathMatch: "full"},
  { path: '', component: PortfolioComponent },
  { path: '**', component: PortfolioComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
