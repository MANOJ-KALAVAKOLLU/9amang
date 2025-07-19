import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isPrasad: boolean = false;
  isShow:boolean=false
  change() {
    this.isPrasad = this.isPrasad? false:true;
    if (this.isShow)
      this.isShow = false
    else
      this.isShow=true
  }
}  
