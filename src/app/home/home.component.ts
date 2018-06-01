import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Http, Response } from '@angular/http';
  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'Giphy App!';
  //link = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC=';
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  trending='http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&q=';
  discription='';
    http: Http;
    
    giphies:any = [];
    initialGiph:any = [];
    searchTerm;


    constructor(http: Http,private favouriteService:AuthService) {
      this.http = http;
      
  }
  

  ngOnInit() {
    this.performTrendingSearch();
   
      this.initialGiph=this.favouriteService.serviceInitial;
    
     
  }
  addGiffy(g){
    
    this.favouriteService.addFavouriteGiphs(g);
    alert("Favourite Giph has been Added");
    console.log("component "+g);
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this.searchTerm = searchTerm;
    var apiLink = this.link + searchTerm.value;
    
    this.http.request(apiLink)
        .subscribe((res: Response) => {
          this.giphies = res.json().data;
          this.initialGiph=this.giphies;
          this.favouriteService.serviceInitial=this.giphies;
              console.log(res.json());
        });
}

performTrendingSearch(): void {
  var apiLink = this.trending;
  
  this.http.request(apiLink)
      .subscribe((res: Response) => {
        this.giphies = res.json().data;
        this.initialGiph=this.giphies;
        this.favouriteService.serviceInitial=this.giphies;
            console.log(res.json());
      });
}
    
display(type,slug):void{
 //this.discription=type+slug;

 alert("The Giffy type is "+type+" "+slug);
}

// performSearch(searchTerm: HTMLInputElement): void {
//       var searchValue=searchTerm.value;
//       this.selectGiphy.getData(searchValue).subscribe(res=>{
//         this.giphies = res
//         console.log(res);
//       })
     
//   }

}
