import { Component, signal,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild(Child) c!: Child;
  x: string = '';
  y: string = '';
  receive(msg:any) {
    this.x = msg;
  }
  ngAfterViewInit()   // this function will automatically run after view is initialised
  {
    this.y = this.c.name;
    alert(this.y)
  }
}
