import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import  {State} from '../model/state'
import {CommonService} from '../services/common-service.service';

describe('AppComponent', () => {
     let commonService: CommonService;
      let httpModule:HttpTestingController;
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
    commonService = TestBed.inject(CommonService);
    httpModule = TestBed.inject(HttpTestingController);
    store= TestBed.inject(MockStore);
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.regionList=[];
    expect(app).toBeTruthy();
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.heading').textContent).toContain('Angular Form With Dropdown');
  });
 
});
