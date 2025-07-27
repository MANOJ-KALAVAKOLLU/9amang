import { Component, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Output } from '@angular/core';
@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  value:string = ''
 @Output() sendMsg = new EventEmitter();
  send() {
    this.sendMsg.emit(this.value);
  }
}
