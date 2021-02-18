import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media-service-output',
  templateUrl: './media-service-output.component.html',
  styleUrls: ['./media-service-output.component.scss']
})
export class MediaServiceOutputComponent implements OnInit {

  isDesktop = false;

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.match$.subscribe(value => this.isDesktop = value);
  }

}
