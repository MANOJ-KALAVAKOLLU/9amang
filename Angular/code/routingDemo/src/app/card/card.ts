import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  v: any = '';
  constructor(public as: ActivatedRoute) {
   this.as.params.subscribe((res:any)=>this.v= res.id)
   }
}
