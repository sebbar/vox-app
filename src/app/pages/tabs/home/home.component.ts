import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public json$: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {

//    const url = 'http://localhost:8190/api/entitled_days';
    const url = 'http://localhost:8190/api/day_offs';

    this.json$ = this.http.get<any[]>(url);
  }

}
