import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ScrollSateService } from 'src/app/shared/services/scroll-sate.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPage implements AfterViewInit {

  gifService = inject(GifsService);
  scrollStateService = inject(ScrollSateService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState()
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop)

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }

}
