import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface GiphyResponse {
  data: any[];
}

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {
  gifs: any[] = [];
  apiKey = 'TU_API_KEY'; // Reemplaza con tu propia API Key

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGifs('juego de tronos'); // Cargar gifs predeterminados
  }

  getGifs(query: string): void {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=9`;

    this.http.get<GiphyResponse>(apiUrl).subscribe(response => {
      this.gifs = response.data;
    });
  }
}
