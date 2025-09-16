import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { Product } from './product/product';
@Component({
  selector: 'app-root',
  imports: [FormsModule,Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  url: string = '';
  @ViewChild(Product) p!: Product;
  C!: number;
  ngAfterViewInit() {
      this.C =  this.p.count
  }
}
