import { Component, OnInit } from '@angular/core';
import { HungservesService } from '../hungserves.service';

@Component({
  selector: 'app-minu-list',
  templateUrl: './minu-list.component.html',
  styleUrls: ['./minu-list.component.css']
})
export class MinuListComponent implements OnInit {

  minuList;
  constructor(dbser:HungservesService) {
  this.minuList=dbser.getminudata();

   }

  ngOnInit(): void {
  }

}
