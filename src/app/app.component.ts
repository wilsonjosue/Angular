import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})

export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  //templateUrl: './app.component.html',
  template: `
    <section>
      <h1>Welcome to Angular App</h1>
      <app-user></app-user>
    </section>`,
  //styleUrl: './app.component.css'
  styles: ':host {color: #a144eb;}'
})

export class AppComponent {}