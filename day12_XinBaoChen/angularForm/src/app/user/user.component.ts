import { Component } from '@angular/core';
import { User } from './user.model';
import { UserRepository } from './repository.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  model: UserRepository = new UserRepository()
  newUser:User = new User()

  get jsonUser(){
    return JSON.stringify(this.newUser)
  }

  addUser(u:User){
    console.log('New user is ' + this.jsonUser)
    }

    displayLog(model:any){
      console.log(model)
    }
  }
