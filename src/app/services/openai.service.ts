import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  // private apiUrl = 'https://api.openai.com/v1/chat/completions'; // URL ของ API

  constructor(private http: HttpClient) {}

  // sendMessage(msg: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.apiKey}`,
  //     'Content-Type': 'application/json'
  //   });

  //   const body = {
  //     model: 'gpt-4o-mini',
  //     temperature: 1,
  //     top_p: 1,
  //     max_tokens: 2048,
  //     messages: [
  //       {
  //         role: 'developer',
  //         content: 'You are a helpful assistant.'
  //       },
  //       {
  //         role: 'user',
  //         content: msg
  //       }
  //     ]
  //   };

  //   return this.http.post(this.apiUrl, body, { headers });
  // }
}
