import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template: 'Hello {{ city }}',
  //styleUrl: './app.component.css'
  styles: ':host {color: #a144eb;}'
})
export class AppComponent {
  title = 'EjercicioTutorial';
  city = 'San Francisco';
}

