import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ABOUT_MOCK } from '../../mocks/about.mocks';
import { AboutCardComponent } from './about-card.component';

describe('AboutCardComponent', () => {
  let component: AboutCardComponent;
  let fixture: ComponentFixture<AboutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('no debería renderizar tarjetas si aboutInfo es null', () => {
    component.aboutInfo = null;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(0);
  });

  it('debería renderizar la tarjeta principal y los 3 contadores cuando aboutInfo está definido', () => {
    component.aboutInfo = ABOUT_MOCK;
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(4);

    const title = fixture.debugElement.query(By.css('h5'));
    expect(title.nativeElement.textContent).toContain(ABOUT_MOCK.title);
  });
});
