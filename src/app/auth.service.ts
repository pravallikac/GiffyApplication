import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  
  favouriteGiphs:any=[];
  serviceInitial:any=[];
  favouriteCount;
  
  

  addFavouriteGiphs(g){
    this.favouriteGiphs.push(g);
    console.log("array is: "+this.favouriteGiphs);
    console.log("Service: "+g.type);

  }
  getFavouriteGiphs()
  {
    console.log(this.favouriteGiphs.length);
    return this.favouriteGiphs;
    
  }
}
