import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrUsers: User [] = [];

  constructor(private userService: UsersService){

  }


  async getUsers($event: string): Promise<void>{
    let name = $event;
    // console.log('Hola que tal',$event)

    try {
     let response = await this.userService.getUsersByName(name);
     this.arrUsers = response.items.slice(1,11);
     console.log(this.arrUsers[0])
    } catch (err){
      console.log(err)
    }
  }

}
