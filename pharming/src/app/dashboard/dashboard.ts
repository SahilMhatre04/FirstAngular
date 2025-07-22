import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  loggedinuser:any
  constructor(private router:Router){
    this.loggedinuser = localStorage.getItem('username')
  }
  logout(){
    localStorage.removeItem('username');
    this.router.navigateByUrl('/')
  }

}
