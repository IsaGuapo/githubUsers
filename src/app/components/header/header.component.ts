import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchForm: FormGroup
  @Output () emiterName:  EventEmitter<string>;

  constructor(private userService: UsersService){
    this.emiterName = new EventEmitter();
    this.searchForm =new FormGroup({
      name:new FormControl('',[
        Validators.minLength(4)
      ])
    },[])
  }

  // async getData(): Promise<void>{
  //   try{
  //     let name =this.searchForm.value;
  //     let response = await this.userService.getUsersByName (name)
  //     console.log(response)
  //   }
  //   catch(error){
  //     console.log (error)
  //   }
   
  // }

  getData(): void{
    //Emitir al padre (Home)
    this.emiterName.emit(this.searchForm.value.name)
  }

}
