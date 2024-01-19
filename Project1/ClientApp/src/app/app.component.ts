import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gifs: any[] = [];

  onSearch(query: string): void {
    this.gifs = []; // Limpiar los resultados al realizar una nueva búsqueda
    this.getGifs(query);
  }
}
