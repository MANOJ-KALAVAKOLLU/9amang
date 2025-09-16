import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DecimalPipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { SlicePipe } from '@angular/common';
import { PrasadPipe } from './prasad-pipe';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,CurrencyPipe,FormsModule,JsonPipe,DecimalPipe,DatePipe,SlicePipe,PrasadPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  na: string = ""
  str: string = "JAVASCRIPT"
  cost: number = 18.269563;
  price: number = 199;
  obj = {
    name: "john", age: 55
  }
  dt = new Date();
  user:string = "This is simple"
}
