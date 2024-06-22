import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template:`
    <section>
      <p>Welcome game works</p>
      <ul>
        @for (item of games; track item.id) {
          <li>{{item.name}}</li>
        }
      </ul>
    </section>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games =[
    {id: 0, name: 'FORZT'}, 
    {id: 1, name: 'Fish'}, 
    {id: 2, name: 'Rak'}, 
    {id: 3, name: 'Hormiga'}, 
    {id: 4, name: 'iceMan'}
  ] 
}
