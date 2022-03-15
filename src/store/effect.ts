import {
  catchError,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CommonService } from '../services/common-service.service'
import { Init,Success, Error } from '../store/action';
import { Injectable } from '@angular/core';
import { CountryData, State } from 'src/model/state';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import {getCountryData} from '../store/selector'

@Injectable()
export class regionEffects {
  constructor(
    private actions$: Actions,
    private service: CommonService,
    private store: Store<State>
  ) {
  }
  countryResult:any='';
  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Init),
      withLatestFrom([this.store.select(getCountryData)]),
      mergeMap(([action,result]) => { 
        result.subscribe((res:any)=>{res? this.countryResult=res[0].region:''})
        if((this.countryResult==='' || action.region!==this.countryResult) && action.region!=="-1"){
          return this.service.getRegion(action.region).pipe(
            map((data:CountryData[]) => {
              return Success({ data });
            }),
            catchError((error:any) => {
              return of(Error(error));
            })
          );
        }
        return from([]);
      })
    );
  });
}