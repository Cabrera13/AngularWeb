import { SeriesDataService } from '../services/series-data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../serie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-episodi-create',
  templateUrl: './episodi-create.component.html',
  styleUrls: ['./episodi-create.component.css']
})
export class EpisodiCreateComponent implements OnInit {
  number : number;
  name = "";
  watched = "";
  rating = 0;
  airDate = "";
  id : number;
  num : number;
  
  constructor(private _data: SeriesDataService,
    private route: ActivatedRoute,
    private location: Location) {
this.route.params.subscribe((params: Params) => {
this.id = params['id'];
this.num = params['num'];
});
}
  ngOnInit() {
  }
  addEpisode(): void {
    this._data.addEpisodes(this.id,  this.num, this.number, this.name,this.airDate, this.rating, this.number);
    this.location.back();
  }
}
