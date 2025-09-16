import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Raju } from './raju/raju';
import { Rani } from './rani/rani';

@Component({
  selector: 'app-root',
  imports: [Raju,Rani],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('serviceDemo');
}
