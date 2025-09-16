import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  books: any[] = [];
  editMode: boolean = false;
  bName: string = '';
  bimageUrl: string = '';
  bAuthor: string = '';
  showForm: boolean = false;
  bid: string = '';
  newBook: any = {};
  url: string = 'https://ca178db600ec1e881521.free.beeceptor.com/api/books/';
  constructor(public hs: HttpClient) {
    this.hs
      .get(this.url)
      .subscribe((res: any) => {
        this.books = res;
      });
  }
  add() {
    if (this.editMode) {
      this.newBook = {
        image_url: this.bimageUrl,
        name: this.bName,
        author: this.bAuthor,
      };
      this.hs
        .put(
          this.url+this.bid,
          this.newBook
        )
        .subscribe((res: any) => {
          window.location.reload();
          this.editMode = false;
        });
    } else {
      this.newBook = {
        image_url: this.bimageUrl,
        name: this.bName,
        author: this.bAuthor,
      };
      this.hs
        .post(
         this.url,
          this.newBook
        )
        .subscribe((res: any) => window.location.reload());
    }
  }
  show() {
    this.showForm = true;
  }
  hide() {
    this.showForm = false;
  }
  removeBook(id: any) {
    this.hs
      .delete(this.url+id)
      .subscribe((res: any) => window.location.reload());
  }
  editBook(id: string, name: string, author: string, url: string) {
    this.editMode = true;
    this.showForm = true;
    this.bName = name;
    this.bimageUrl = url;
    this.bAuthor = author;
    this.bid = id;
  }
}
