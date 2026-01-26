import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const loadFromLocalStorage= () => {
  const gifsFromLocalStorage = localStorage.getItem('Gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient)

  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(false);

  private trendingPage = signal(0);

  trendingGifsGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i+=3){
      groups.push(this.trendingGifs().slice(i, i+3));
    }
    return groups;
  })

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))

  saveGifsToLocalStorage = effect(() => {
    localStorage.setItem('Gifs', JSON.stringify(this.searchHistory()))
  })

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {

    if (this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyAPiKey,
        limit: 20,
        offset: this.trendingPage() * 20,
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs])
      this.trendingGifsLoading.set(false)
      this.trendingPage.update((current) => current + 1)
    })
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyAPiKey,
        limit: 20,
        q: query,
      }
    }).pipe(
      map(({ data }) => data),
      map((item) => GifMapper.mapGiphyItemsToGifArray(item)),
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLocaleLowerCase()]: items,
        }))
      })
    )
  }

  getHistoryGifs(query:string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
