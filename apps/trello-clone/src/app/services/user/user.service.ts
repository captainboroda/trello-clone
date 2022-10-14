import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { IUser } from "../../interfaces/user.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { }

  getUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.API_URL}/users/me`);
  }
}
