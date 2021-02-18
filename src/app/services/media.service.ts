import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private matches = new ReplaySubject<boolean>(1);
  public match$ = this.matches.asObservable();
  private query = '(min-width: 768px)';

  constructor() { }

  init() {
    if (window) {
      const mediaQueryList = window.matchMedia(this.query);
      const listener = (event: any) => {
        console.log('media has changed!');
        this.matches.next(event.matches)
      };
      listener(mediaQueryList);
      mediaQueryList.addEventListener('change', listener);
    }
  }
}
