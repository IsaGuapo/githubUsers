import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchForm: FormGroup

  constructor(){
    this.searchForm =new FormGroup({
      name:new FormControl('',[])
    },[])
  }

  getData() :void{
   console.log(this.searchForm.value) 
  }

}
