import { Component, OnInit } from '@angular/core';
import { CurrencyTable } from '../models/CurrencyTable';
import { CurrencyService } from '../services/currency/currency.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies: CurrencyTable;
  constructor(private currService : CurrencyService) { 
    
  }
   
  
  ngOnInit(): void {
   this.currService.getRepos().subscribe(
     (response)=>{
       this.currencies = response["0"]
       console.log(this.currencies)
     }
   );

  }

}
