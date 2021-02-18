import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaServiceOutputComponent } from './media-service-output.component';

describe('MediaServiceOutputComponent', () => {
  let component: MediaServiceOutputComponent;
  let fixture: ComponentFixture<MediaServiceOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaServiceOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaServiceOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
