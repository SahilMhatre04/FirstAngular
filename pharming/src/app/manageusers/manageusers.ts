import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-manageusers',
  standalone: false,
  templateUrl: './manageusers.html',
  styleUrl: './manageusers.css'
})
export class Manageusers {
  users:any[]=[]
  user:any={}
  constructor(private Todo:Todo){
    // this.Todo.users().subscribe(temp => this.users = temp)
    this.refresh()
  }

  refresh(){
    this.Todo.users().subscribe(temp => this.users = temp)
  }

  deleteuser(id:any){
    this.Todo.deleteuser(id).subscribe(temp => {alert("User Deleted");
      this.refresh()
    })
  }

  updateuser(){
    this.Todo.updateuser(this.user._id,this.user).subscribe(x => {
      if(x == 'failed'){
        alert("User already exist")
      } 
      else{
        alert("user updated")
        this.refresh()
        this.user = {}
      }
    } )
      
  }

  edit(id:any){
    let user = this.users.find(x => x._id == id)
    this.user = {...user}
  }

}
