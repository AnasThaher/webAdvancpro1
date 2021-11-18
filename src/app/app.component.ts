import { Component } from '@angular/core';
import { DataRestaurant } from './data-restaurant';
import { HungservesService } from './hungserves.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hungerstation';

  Restaurant;

constructor(resd:HungservesService){
 this.Restaurant=resd.gethungdata()
// console.log(this.Restaurant)

}




}
