import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.css']
})
export class SpotlightComponent implements OnInit {

  @Input() cakeToShow: any;  // use the @Input decorator to indicate this comes from the parent
  constructor() { }
  ngOninit() { }

  

}
