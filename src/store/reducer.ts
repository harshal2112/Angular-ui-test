import { State } from '../model/state';
import { createReducer, on } from '@ngrx/store';
import { Init, Success, Error } from './action';
import { INITIAL_REGION } from '../helper/Constant';
export const initialState: State = {
    isDisabled: true,
    region: '',
    regionList: ['Europe', 'Asia'],
    europeCountryList: [],
    asiaCountryList: [],
    error: '',
};

const _regionReducer = createReducer(
    initialState,
    on(Init, (state, action) => ({ ...state, isDisabled: false, region: action.region })),
    on(Success, (state, action) => ({ ...state, isDisabled: false, [`${state.region.toLowerCase()}CountryList`]: state.region === INITIAL_REGION ? [...state.asiaCountryList, action.data] : [...state.europeCountryList, action.data] })),
    on(Error, (state, action) => ({ ...state, isDisabled: true, data: [], error: [...state.error, action.error] }))
);

export function regionReducer(state: any, action: any) {
    return _regionReducer(state, action);
}