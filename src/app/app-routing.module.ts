import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';
import { SubcardComponent } from './subcard/subcard.component';
import { CurrencyComponent } from './currency/currency.component';
const routes: Routes = [
  {path: 'main' , component: SubcardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'currency', component: CurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})

export class AppRoutingModule { }
