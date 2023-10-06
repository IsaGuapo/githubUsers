import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   /* https://api.github.com/search/users?q=YOUR_NAME. ---ruta 1 */
   /* https://api.github.com/users/YOUR_NAME  --ruta 2*/

   baseUrl: string = 'https://api.github.com/'

  constructor(private httpClient: HttpClient) { }

  getUsersByName (pName: string): Promise <any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}search/users?q=${pName}`))
  }
}
