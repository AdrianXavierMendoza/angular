import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService) { }
  newCake: any;
  cakes: any = [];
  showStats;
  ngOnInit() {
    this.getCakesFS();
    this.newCake = { title: "", description: "" }
  }
  getCakesFS() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("You got cakes!", data)
      for(var cake of data){
        cake.newReview ={rating:0, comments:""}
        
        console.log(cake)
      }
      this.cakes = data;
    });
  }

  addCakeFS() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("You created a new Cake!", data)
      this.newCake = data;
      this.newCake = { baker: "", image: "" }
      this.getCakesFS();
    });
  }

  reviewCakeFS(cake) {
    let observable = this._httpService.updateOneCake(cake._id, cake.newReview);
    observable.subscribe(data => {
      console.log("Thanks for reviewing", data, cake.newReview)
      cake.newReview ={rating:0, comments:""}
    });
  }

  showStatsDiv(cake) {
    
    console.log("Got our tasks Adi!", cake)
    this.showStats = cake;

  }

}
