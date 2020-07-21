import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  status: boolean = false;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.activateState.subscribe(
      (x) => {this.status = x}
    )
  }

}
