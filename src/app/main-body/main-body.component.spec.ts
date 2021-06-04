import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyComponent } from './main-body.component';

describe('MainBodyComponent', () => {
  let component: MainBodyComponent;
  let fixture: ComponentFixture<MainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(MainBodyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.background-pentagon h2').textContent).toContain('Testimonials');
  });
});
