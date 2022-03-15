import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import  {State} from '../model/state'

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let store: MockStore<State>;
  let initialState={
   isDisabled: true,
   region:'',
   europeCountryList: [],
   asiaCountryList:[],
   error:''
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
