import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { Logger } from './../logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// recieving the data 
  constructor(private router:Router,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      console.log(params);
  });
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    // sending
    let navigationExtras:NavigationExtras={
      queryParams:this.loggerModel
    }
   const Lname=window.localStorage.getItem('Name');
   const Lpassword=window.localStorage.getItem('Password');
   localStorage.setItem('loggedUser',this.loggerModel.name);
    /* console.log(Lname);
    console.log(Lpassword);  */
    
   console.log(this.loggerModel.name);
   console.log(this.loggerModel.password); 

 
   if(this.loggerModel.name==Lname && this.loggerModel.password==Lpassword)
   {
     console.log("Logged in sucessfully")
    this.router.navigate(['/home']);
   }
   else
   
   {
     console.log("invalid username or Password")
     this.router.navigate(['/login']);
   }


  }
  loggerModel=new Logger('Kishor','1234');

}
