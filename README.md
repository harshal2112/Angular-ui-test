# Screening Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## installation

Run `npm install`

once run this command all the dependecy and dev dependecy install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Technology stack

NgRX
Angular 12.0.0,
Added bootstarp CSS in Angular.json (UI manage using bootstrap)
RXJS

## API Information

https://restcountries.eu/rest/v2/region/europe
https://restcountries.eu/rest/v2/region/asia

We can use  above end points to get the countries information as per the selected region, however when i hit these end points i was facing Network timout error, so if you face simlier issue then you can replace base url with below, it's produce simlier response like above end points.

https://restcountries.com/v2/region/

you can refer base url from:

app/helper/Constant.ts


