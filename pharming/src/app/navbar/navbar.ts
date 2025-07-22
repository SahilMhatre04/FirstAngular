import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  loggedinuser:any
  constructor(private router:Router){
    this.loggedinuser = localStorage.getItem('username')
  }
  logout(){
    localStorage.removeItem('username');
    this.router.navigateByUrl('/')
  }

}
