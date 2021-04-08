
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  public cities: City[];
  constructor(
    private http: HttpClient,@Inject('BASE_URL') private baseUrl: string) { }


  ngOnInit() {
  //http.get<City[]>(baseUrl + 'api / cities').subscribe(result => { cities = result; }, error => console.error(error));
    this.http.get<City[]>(this.baseUrl + 'api/Cities').subscribe(result => { this.cities = result;}, error => console.error(error));
  }
  /*ngOnInit() {
    this.loadData(null);
  }
  */
}
