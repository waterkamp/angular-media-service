import { Component, OnInit } from '@angular/core';
import { MediaService } from './services/media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-media-service';

  constructor(private mediaService: MediaService) {

  }

  ngOnInit() {
    this.mediaService.init();
  }
}
