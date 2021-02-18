import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaServiceOutputComponent } from './components/media-service-output/media-service-output.component';
import { MediaComponent } from './components/media/media.component';
import { MediaDirective } from './directives/media.directive';

@NgModule({
  declarations: [
    AppComponent,
    MediaServiceOutputComponent,
    MediaComponent,
    MediaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
