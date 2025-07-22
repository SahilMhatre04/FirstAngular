import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  user:any={}
  constructor(private Todo:Todo){

  }
  
  signin(){
    this.Todo.login(this.user).subscribe(temp =>{
      if(temp=="ok"){
        location.href = '/dashboard'
        localStorage.setItem('username',this.user.username)
      }
      else {
        alert("login failed")
      }
      this.user={}
    })
  }

}
