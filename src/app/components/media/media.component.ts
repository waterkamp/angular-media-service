import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  isMatch = false;

  @Input() set query(value: string) {
    if (this.removeListener) {
      this.removeListener();
    }

    this.setListener(value);
  }

  private removeListener: (() => void) | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  private setListener(query: string) {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: any) => this.isMatch = event.matches;
    listener(mediaQueryList);
    mediaQueryList.addEventListener('change', listener);
    this.removeListener = () => mediaQueryList.removeEventListener('change', listener);
  }

}
