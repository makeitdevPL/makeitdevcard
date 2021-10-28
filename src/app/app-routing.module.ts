import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SubcardComponent } from './subcard/subcard.component';
const routes: Routes = [
  {path: 'main' , component: SubcardComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})

export class AppRoutingModule { }
