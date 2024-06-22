import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template: ' <h1>Hello Universe</h1>',
  //styleUrl: './app.component.css'
  styles: ':host {color: #a144eb;}'
})
export class AppComponent {
  title = 'EjercicioTutorial';
}

