import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from '../data-card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  dataard;
  constructor() {
    
   }
   
@Input()
set dat(d: DataCard){
  this.dataard = d;
}


  ngOnInit(): void {
  }

}
