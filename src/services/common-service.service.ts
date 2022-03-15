import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryData } from '../model/state';
import { BASE_URL } from '../helper/Constant';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getRegion(region: string): Observable<CountryData[]> {
    let regionValue = region.toLowerCase();
    return this.http
      .get<CountryData[]>(
        `${BASE_URL}${regionValue}`
      ).pipe(
        map((data:any) => {
          let result: CountryData[] = [];
          for (let key in data) {
            const name = data[key].name;
            const capital = data[key].capital ? data[key].capital : '';
            const population = data[key].population;
            const currencies = Object.values(data[key].currencies).map((curr: any) => { return curr.name })[0];
            const flag = data[key].flag
            const region = data[key].region;
            result.push({ name, capital, population, currencies, flag,region} as CountryData);
          }
          return result;
          
        })
      );
  }
}
