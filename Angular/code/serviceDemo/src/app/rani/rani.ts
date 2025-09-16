import { Component } from '@angular/core';
import { Common } from '../common';
@Component({
  selector: 'app-rani',
  imports: [],
  templateUrl: './rani.html',
  styleUrl: './rani.css'
})
export class Rani {
  raniMsg = '';receiveMsg=''
  constructor(public cs: Common) {
    
  }
  receive() {
    this.receiveMsg = this.cs.msg
  }
}
