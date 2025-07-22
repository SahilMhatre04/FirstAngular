import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  user:any={}
  constructor(private Todo:Todo){}
  signup(){
    this.Todo.signup(this.user).subscribe(temp=>alert('signup successs'))
    this.user={}
  }
}
