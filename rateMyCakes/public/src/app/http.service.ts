import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOneTask();
  }
  getCakes() {
    return this._http.get('/cakes');
  }
  addCake(newCake){
    return this._http.post('/new', newCake);
  }
  updateOneCake(id, newReview){
    return this._http.put('/update/'+id, newReview);
  }
}
