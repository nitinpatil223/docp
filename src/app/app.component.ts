import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Auther,Quotes} from './../Models/Models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docp';
  quotes:Array<Quotes>[];
  constructor (private http: HttpClient) { }
  ngOnInit () {
    this.http.get('./assets/quotes.json').subscribe(
      data => {
        this.quotes = data as Array<Quotes>[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.quotes);
       
        console.log(this.quotes[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
