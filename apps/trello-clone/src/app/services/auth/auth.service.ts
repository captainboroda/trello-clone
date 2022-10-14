import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { LoginI } from "../../interfaces/login.interface";
import { Observable, tap } from "rxjs";
import { IToken } from "../../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  login(body: LoginI): Observable<IToken> {
    return this.httpClient.post<IToken>(`${environment.API_URL}/auth/login`, body)
      .pipe(
        tap(({access_token}) => localStorage.setItem('access_token', access_token))
      );
  }
}
