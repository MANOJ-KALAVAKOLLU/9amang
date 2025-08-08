import { Injectable } from '@angular/core';
import { API_KEY } from '../../../../environments'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Api {
  constructor(public hc:HttpClient) {
    
  }
  getData(msg:string) {
    const headers = {
       Authorization: `Bearer ${API_KEY}`,
       'Content-Type': 'application/json',
    }
    const body = JSON.stringify({
      model: 'qwen/qwen3-30b-a3b-instruct-2507',
      messages: [
        {
          role: 'user',
          content: "You are a good liar, you always manipulate and convince the people. you will never speak truth but convince the people that your lies are true. You will always answer in 200 words, Don't answer any questions except philosophical questions, for other questions, reply, ask only philosophical questions"+msg,
        },
      ],
    });
   return this.hc.post('https://openrouter.ai/api/v1/chat/completions',body,{headers:headers})
   }
}
