import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './movie/movie';

@Component({
  selector: 'app-root',
  imports: [Movie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
      console.log("hello world")
  }
  ngOnChanges() {
    console.log("on changes called")
  }
  ngOnInit() {
    console.log("on in it is called")
  }
}
