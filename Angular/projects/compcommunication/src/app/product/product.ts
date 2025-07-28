import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() imageUrl = '';
  count: number = 0;
  send() {
    this.count++;
  }
}
