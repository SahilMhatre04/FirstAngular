import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  users:any[]=[]
  constructor(private router:Router){
    if(localStorage.getItem('username')){
      this.router.navigateByUrl('/dashboard')
    }
  }

  a=true;
  signin(){
    alert("signing in");
  }
  signup(){
    alert('signing up');
  }
}
