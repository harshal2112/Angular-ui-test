import { Component, Input, OnChanges,OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { State } from '../model/state';
import { getCountryDetails } from '../store/selector';
import { CountryData } from '../model/state';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnChanges,OnDestroy{

  constructor(private store: Store<State>) { }
  @Input() countryName: string = '';
  countryDetails:CountryData[] = [];
  countryDetailsSubscription:Subscription = new Subscription;
  ngOnChanges(): void {
    this.countryDetailsSubscription=this.store.select(getCountryDetails(this.countryName)).subscribe((result:any) => { this.countryDetails=result;})
  }
  ngOnDestroy(): void {
    this.countryDetailsSubscription.unsubscribe();
  }
}
