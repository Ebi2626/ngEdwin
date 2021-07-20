import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(async () => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
      compiled = fixture.nativeElement;
    })

    it('should create the app', () => {
      expect(app).toBeTruthy();
    })

  it(`should have as title 'ngEdwin'`, () => {
    expect(app.title).toEqual('ngEdwin');
  });

  it('should render header', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('app-header').innerHTML).toBeTruthy();
  });

  it('should render router', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('router-outlet').innerHTML).toBeTruthy();
  });
  
  it('should render footer', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('app-footer').innerHTML).toBeTruthy();
  });
});
