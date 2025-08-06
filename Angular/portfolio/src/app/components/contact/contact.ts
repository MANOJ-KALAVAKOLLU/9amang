import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [FormsModule,NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  onSubmit(e: any,f:any) {
    e.preventDefault();
    console.log(f)
  }
}
