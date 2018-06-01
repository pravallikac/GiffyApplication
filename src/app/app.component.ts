import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  
  favouriteCount;
  constructor(private favouriteService:AuthService)
  {

  }
  ngOnInit()
  {
    this.favouriteCount=this.favouriteService.getFavouriteGiphs().length;

  }
}
