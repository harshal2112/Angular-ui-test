import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../model/state'
import { CountryData } from '../model/state'


const getRegionState = createFeatureSelector<State>('regionData');
export const getRegionList = createSelector(getRegionState, (state) => state.regionList);
const getRegion = createSelector(getRegionState, (state) => state.region);
 const getEuropeData = createSelector(getRegionState, (state) => state.europeCountryList[0]);
export const getDisabledState = createSelector(getRegionState, (state) => state.isDisabled);
 const getAsiaData = createSelector(getRegionState, (state) => state.asiaCountryList[0]);
export const getCountryData = createSelector(getEuropeData, getAsiaData, getRegion, (europeCountry, asiaCountry, region) => {
    return region ==="Asia" ? asiaCountry:europeCountry;
});

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