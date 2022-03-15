import { Component, OnInit } from '@angular/core';
import { Init } from '../store/action';
import { Store } from '@ngrx/store';
import { State } from '../model/state';
import { getCountryData, getDisabledState, getError, getRegionList } from '../store/selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<State>) { }
  selectedRegion: string = '-1';
  selectedCountry: string = '-1';
  isDisabled: boolean = true;
  regionList: Array<string> = []
  countryList: any = [];
  showDetails: boolean = false;
  errorResponse: any = '';
  ngOnInit(): void {
    this.store.select(getRegionList).subscribe(list=> this.regionList = list);
  }
  fetchCountry() {
    let searchTerm: string = this.selectedRegion;
    this.store.select(getDisabledState).subscribe(state => this.isDisabled = state);
    this.store.select(getCountryData).subscribe(data => { this.countryList = data; this.selectedCountry = '-1' })
    this.store.dispatch(Init({ region: searchTerm }));
    this.store.select(getError).subscribe(error => { this.errorResponse = error });
    if (this.selectedRegion === "-1") {
      this.selectedCountry = '-1';
    }
  };
  fetchConuntryDetails() {
    this.showDetails = true;
    return this.selectedCountry;
  }

}