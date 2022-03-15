import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonService } from '../services/common-service.service';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { regionEffects } from '../store/effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as countryReducer from '../store/reducer';
import { CountryDetailsComponent } from '../country-details/country-details.component';

@NgModule({
  declarations: [
     AppComponent ,
     CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({'regionData': countryReducer.regionReducer}),
    EffectsModule.forRoot([regionEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
