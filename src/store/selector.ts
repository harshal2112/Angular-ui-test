import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../model/state'
import { CountryData } from '../model/state';
import {INTIAL_REGION,FEATURE_NAME} from '../helper/Constant'

const getRegionState = createFeatureSelector<State>(FEATURE_NAME);
export const getRegionList = createSelector(getRegionState, (state) => state && state.regionList);
export const getDisabledState = createSelector(getRegionState, (state) =>{
    return state.region==="-1" ? true : state.isDisabled;
});
export const getCountryData = createSelector(getRegionState, (state) => {
    return state.region === INTIAL_REGION ? state.asiaCountryList[0]:state.europeCountryList[0];
});
export const getCountryList = createSelector(getCountryData,(data=>{
    let countries:Array<string>=[];
    for (let key in data) {
        countries.push(data[key].name)
    }
    return  countries;
}));
export const getCountryDetails = (countryName: string) =>
    createSelector(
        getCountryData,
        (CountryData: CountryData[]) => {
            let cData: [] = []
            let countryObj = CountryData && CountryData.find(c => c.name === countryName);
            return [...cData, countryObj]
        }
    )

export const getError = createSelector(getRegionState, (state) => state.error[0] ? state.error[0].message : '');