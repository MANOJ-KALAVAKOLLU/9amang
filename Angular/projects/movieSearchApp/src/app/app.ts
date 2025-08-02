import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mname: string = '';
  movies: any[] = [];
  constructor(public hc: HttpClient) { }
  search() {
    this.hc.get(`https://www.omdbapi.com/?s=${this.mname}&apikey=9839626c`)
      .subscribe((res: any) => {
        console.log(res);
       this.movies =res.Search
    })
  }
}
