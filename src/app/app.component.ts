import { Component, OnInit, OnDestroy } from '@angular/core';
import { Init } from '../store/action';
import { Store } from '@ngrx/store';
import { State } from '../model/state';
import { REGION_LABEL, COUNTRY_LABEL, DEFAULT_REGION_VALUE, DEFAULT_COUNTRY_VALUE } from '../helper/Constant';
import { getCountryList, getDisabledState, getError, getRegionList } from '../store/selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private store: Store<State>) { }
  selectedRegion: string = DEFAULT_REGION_VALUE;
  selectedCountry: string = DEFAULT_COUNTRY_VALUE;
  regionLabel: string = REGION_LABEL;
  countryLabel: string = COUNTRY_LABEL;
  isDisabled: boolean = true;
  regionList: Array<string> = []
  countryList: Array<string> = [];
  showDetails: boolean = false;
  errorResponse: string = '';
  countrySubscription: Subscription = new Subscription;
  disableStateSubscription: Subscription = new Subscription;
  errorSubscription: Subscription = new Subscription;
  regionListSubscription: Subscription = new Subscription;
  ngOnInit(): void {
    this.regionListSubscription = this.store.select(getRegionList).subscribe(list => this.regionList = list);
  }
  resetCountryData() {
    this.countryList=[];
    this.selectedCountry = DEFAULT_COUNTRY_VALUE;
    this.showDetails = false;
  }
  fetchCountry(value: string) {
    this.disableStateSubscription = this.store.select(getDisabledState).subscribe(state => this.isDisabled = state);
    this.countrySubscription = this.store.select(getCountryList).subscribe(data => {
      this.resetCountryData();
      this.countryList = data; 
    });
    this.store.dispatch(Init({ region: value }));
    this.errorSubscription = this.store.select(getError).subscribe(error => { this.errorResponse = error });
    if (value === "-1") {
      this.resetCountryData();
    }
  };
  fetchCountryDetails(value: string) {
    this.showDetails = true;
    this.selectedCountry = value;
  }

  ngOnDestroy(): void {
    this.countrySubscription.unsubscribe()
    this.errorSubscription.unsubscribe();
    this.disableStateSubscription.unsubscribe();
    this.regionListSubscription.unsubscribe();
  }
}