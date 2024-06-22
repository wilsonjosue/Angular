import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  //templateUrl: './app.component.html',
  template: `
    <section>
      <h1>Welcome to Angular App desde {{city}}</h1>
      <app-user></app-user>
    </section>`,
  //styleUrl: './app.component.css'
  styles: ':host {color: #a144eb;}'
})

export class AppComponent {
  city = 'Peru'
}