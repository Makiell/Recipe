import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://api.edamam.com/api/recipes/v2?type=any&app_id=c7bdf3d5&app_key=%2067a46cce446bf6695b6dce4f4db615d4%09';

  constructor(private http: HttpClient) { }

  getCharacters(text: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&q=${text}`);
  }

  getNext(text: string): Observable<any> {
    return this.http.get<any>(text);
  }

  getCharacter(text: string): Observable<any> {
    return this.http.get<any>(text)
  }

}
