import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//recieve data from login
userDisplayName='';
  constructor(private router:Router,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      console.log(params);
  });
}
  ngOnInit(): void {
    this.userDisplayName=localStorage.getItem('loggedUser');
  }

}
