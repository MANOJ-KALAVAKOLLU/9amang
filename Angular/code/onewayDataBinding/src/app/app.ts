import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = "john wick"
  url: string = "https://m.media-amazon.com/images/I/51tKIR7GWYL.jpg"
  isDisable: boolean = true
  fun() {
    alert("hellloooo");
  }
}
