import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  changeStatus() {
    this.service.activateState.next(true);
    console.log('new status emmited true')
  }

}
