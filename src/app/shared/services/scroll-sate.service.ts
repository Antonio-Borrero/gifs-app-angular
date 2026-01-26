import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollSateService {

  trendingScrollState = signal(0);

}
