import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { City } from './city';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon'];
  public cities: City[];
  dataSource: MatTableDataSource<City>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  ngOnInit(): void {
    this.http.get<City[]>(this.baseUrl + 'api/Cities')
      .subscribe(result => {
        this.cities = result;
        this.dataSource = new MatTableDataSource(this.cities);
        this.dataSource.paginator = this.paginator;
      }, error => console.error(error));
  }
}
