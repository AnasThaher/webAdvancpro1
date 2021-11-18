import { Component, Input, OnInit } from '@angular/core';
import { DataRestaurant } from '../data-restaurant';
import { HungservesService } from '../hungserves.service';

@Component({
  selector: 'app-navbarhung',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Reste;
imgurl;  constructor(dd:HungservesService) { 
    // console.log(this.Reste);
    // console.log("hi")
  }

  ngOnInit(): void {
  }
// @Input() Rest:DataRestaurant;


@Input()
set daat(d: DataRestaurant){
  this.Reste = d;
 this.imgurl=this.Reste[0].image;
 console.log(this.Reste[0].image);
// this.dd=this.Reste
       console.log(this.Reste);
       console.log("hu")

}

}
