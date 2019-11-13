import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjaGold';
  gold = 0;
  activityLog =[];
  addGold(num1, num2, loc) {
    const num = Math.floor(Math.random()*num1+num2)
    this.gold += num;
    console.log("You got", num)
    console.log(this.gold)
    this.activityLog.unshift("You have earned "+num+" gold from "+loc)
  }
}
