import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
  @Input() title: string = '';
  @Input() url:string=''
}
