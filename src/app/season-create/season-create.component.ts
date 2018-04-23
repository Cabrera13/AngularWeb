import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../serie';
import { SeriesDataService } from '../services/series-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Season } from '../season';

@Component({
  selector: 'app-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeasonCreateComponent implements OnInit {

  image = "";
  first = "";
  last = "";
  id : number;
  numseason : 0;
  seasons : Array<Season>;
  constructor(private _data: SeriesDataService,
    private route: ActivatedRoute,
    private location: Location) {
    this.route.params.subscribe(res => this.id = res.id);
  }  
  ngOnInit() {
  }

  addSeason(): void {
    this._data.addSeasons(this.id, this.numseason, this.image, this.first, this.last);
  }
}