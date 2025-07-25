import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Movies } from './movies/movies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Movies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  movies: any[] = [
    {
      movieName: "John Wick",
      imageURl:"https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/250px-John_Wick_TeaserPoster.jpg"
    },
    {
      movieName: "The Terminal",
      imageURl:"https://m.media-amazon.com/images/M/MV5BMTM1MTIwNTMxOF5BMl5BanBnXkFtZTcwNjIxMjQyMw@@._V1_.jpg"
    },
    {
      movieName: "Avatar",
      imageURl:"https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
    },
    {
      movieName: "Bahubal",
      imageURl:"https://m.media-amazon.com/images/I/81oNZh2FjFL.jpg"
    },

  ]
}
