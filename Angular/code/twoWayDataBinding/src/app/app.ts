import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  dollars: number = 0;
  value: number = 0;
  convert() {
    this.value = this.dollars * 85.12;
  }
  a: number = 0;
  b: number = 0;
  c: number = 0;
  add() {
    this.c = this.a + this.b;
    this.a = 0;
    this.b = 0;
  }
}
