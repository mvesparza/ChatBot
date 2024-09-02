import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://localhost:8085/api/chat/query';

  constructor(private http: HttpClient) { }

  getChatResponse(query: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { query });
  }
}
