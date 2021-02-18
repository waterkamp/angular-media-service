import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[media]'
})
export class MediaDirective {

  @Input() set media(query: string) {
    if (this.removeListener) {
      this.removeListener();
    }

    this.setListener(query);
  }

  private hasView = false;
  private removeListener: (() => void) | undefined;


  constructor(private readonly viewContainer: ViewContainerRef,
    private readonly template: TemplateRef<any>) { }


  private setListener(query: string) {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: any) => {
      if (event.matches && !this.hasView) {
        this.hasView = true;
        this.viewContainer.createEmbeddedView(this.template);
      }

      if (!event.matches && this.hasView) {
        this.hasView = false;
        this.viewContainer.clear();
      }
    }

    listener(mediaQueryList);
    mediaQueryList.addEventListener('change', listener);
    this.removeListener = () => mediaQueryList.removeEventListener('change', listener);
  }
}
