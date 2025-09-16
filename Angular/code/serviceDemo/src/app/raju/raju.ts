import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Common } from '../common';
@Component({
  selector: 'app-raju',
  imports: [FormsModule],
  templateUrl: './raju.html',
  styleUrl: './raju.css'
})
export class Raju {
  rajuMsg: string = ''
  constructor(public c:Common) { 
  }
  send() {
    this.c.msg = this.rajuMsg;
  }
}
