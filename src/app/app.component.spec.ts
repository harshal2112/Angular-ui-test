import { TestBed,ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import  {State} from '../model/state'
import {CommonService} from '../services/common-service.service';

describe('AppComponent', () => {
      let commonService: CommonService;
      let httpModule:HttpTestingController;
      let component: AppComponent;
      let fixture: ComponentFixture<AppComponent>;

      let store: MockStore<State>;
      let initialState:State={
        isDisabled: true,
        region:'',
        regionList:['Europe','Asia'],
        europeCountryList: [],
        asiaCountryList:[],
        error:''
      }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CommonService,
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    commonService = TestBed.inject(CommonService);
    httpModule = TestBed.inject(HttpTestingController);
    store= TestBed.inject(MockStore);
  });
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.heading').textContent).toContain('Angular Form With Dropdown');
  });
  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
