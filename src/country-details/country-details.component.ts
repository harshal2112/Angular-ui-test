import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../model/state';
import { getCountryDetails } from '../store/selector';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnChanges {

  constructor(private store: Store<State>) { }
  @Input() countryName: string = '';
  countryDetails:any;
  ngOnChanges(): void {
    this.store.select(getCountryDetails(this.countryName)).subscribe((result:any) => { this.countryDetails=result;})
  }

}
