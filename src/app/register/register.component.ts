import { Component, OnInit } from '@angular/core';
import { User } from './../../../../forms/src/app/user';
import { Router , NavigationExtras        } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 

 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  sub:any;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    /* this.sub = this.route
    .data
    .subscribe(value => console.log(value)); */
  }
  onSubmit()
  {
    //sending the data from register component
    let navigationExtras: NavigationExtras = {
      queryParams:this.userModel
      //  { 
      //    /*  name: 'Kishor',
      //     password: '1234' */
      // }
  }
     
     localStorage.setItem('Name',this.userModel.name);
    localStorage.setItem('Email',this.userModel.email);
    localStorage.setItem('Password',this.userModel.password);
    localStorage.setItem('Phone',JSON.stringify(this.userModel.phone));
    localStorage.setItem('City',this.userModel.city);
    localStorage.setItem('Gender',this.userModel.gender);  
    this.router.navigate(['/login'],navigationExtras);

    
   

  }
  city=['Bangalore','Mumbai','Pune'];
  userModel=new User('Kishor','kishor@gmail.com','',987654321,'','male')

}
