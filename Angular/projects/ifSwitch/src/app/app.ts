import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { NgFor, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgSwitchCase, NgSwitch, NgSwitchDefault,NgFor,NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  num: number = 0;
  role: string = 'parent';
  arr: string[] = ['raju', 'john', 'shekhar'];
  isEven: boolean = true;
  evenOdd() {
    this.isEven = this.num % 2 == 0 ? true : false;
  }
}
