import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  movies: any[] = [];
  constructor(public hc: HttpClient) {
    this.getData();
  }
  getData() {
    this.hc
      .get(`http://localhost:3000/movies`)
      .subscribe((res: any) => (this.movies = res));
  }
  deleteMovie(id: any) {
    console.log(id)
    let x = confirm("do you really want to delete it?");
    if (x) {
      console.log(x,id)
      this.hc.delete(`http://localhost:3000/movies/${id}`)
      .subscribe((res:any)=>this.getData())
    }
  }
}
