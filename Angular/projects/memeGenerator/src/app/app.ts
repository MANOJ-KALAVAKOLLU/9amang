import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { Header } from './header/header';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  topText: string = '';
  bottomText: string = '';
  text1: string = '';
  text2: string = '';
  generateMeme() {
    this.text1 = this.topText;
    this.text2= this.bottomText
  }
}
