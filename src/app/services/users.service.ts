import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'https://api.github.com/'

  constructor(private httpClient: HttpClient) { }


   /* https://api.github.com/search/users?q=YOUR_NAME. ---ruta 1 */
  getUsersByName (pName: string): Promise <any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}search/users?q=${pName}`))
  }

   /* https://api.github.com/users/YOUR_NAME  --ruta 2*/
   getUserByLogin(pLogin: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}users/${pLogin}`))
  }
}
