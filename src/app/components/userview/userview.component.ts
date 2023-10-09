import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  
    myUser!: User | any;

  constructor (
    private activeRoute: ActivatedRoute ,
    private userServices: UsersService
      ) {

  }

  //Funciones del ciclo de vida de los  componentes
  ngOnInit() : void{
    //Para capturar la ruta con el id del usuario
    this.activeRoute.params.subscribe(async(params: any)=>{ //observable-> se queda esperando continuamentepara saber a que ruta tiene que acceder
      //console.log(params.userlogin);
      let login = params.userlogin;
      this.myUser = await this.userServices.getUserByLogin(login);
      
    } )
  }
}
