import { createAction, props } from '@ngrx/store';
import { CountryData } from 'src/model/state';

export const Init = createAction(
  '[Region Page] Region',
  props<{ region: string}>()
);
 export const Success= createAction(
    '[Success Page] Success',
    props<{data:CountryData[]}>()
    
  );

  export const Error= createAction(
    '[Error Page] Error', 
     props<{error:any}>()
  );
