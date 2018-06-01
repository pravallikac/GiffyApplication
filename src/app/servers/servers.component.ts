import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   private getFavourites: any = [];

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private favouriteService:AuthService) {
  }

  ngOnInit() {
   
this.getFavourites=this.favouriteService.getFavouriteGiphs();
  }

  
  display(type,slug):void{
    
   
    alert("The Giffy type is "+type+" "+slug);
   }
}
