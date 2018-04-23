import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SeriesDataService } from '../services/series-data.service';
import { Serie } from '../serie';
import { Season } from '../season';
import { Episode } from '../episode';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.css']
})
export class SeasonDetailsComponent implements OnInit {
  season : Season;
  id: number;
  num : number;
  episodes : Episode[];

  constructor(private _data: SeriesDataService,
              private route: ActivatedRoute,
              private location: Location) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.num = params['num'];
    });
  }

  ngOnInit() {
    this.getSeason();
    this.getEpisodes();
  }
  deleteSeasons(): void {
    this._data.deleteSeasons(this.id, this.num);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
  save() {
    this.season.Number = this.num;
    this._data.updateSeasons(this.id, this.num, this.season);
  }
  getSeason() : void {
    this._data.getSeason(this.id, this.num).subscribe (
      s => {
          if (s) {
            console.log(s);
            this.season = s[0];
            
          }
        }
      );
    console.log(this.season)
  }
  getEpisodes() : void {
    this._data.getEpisodes(this.id,this.num).subscribe(res => {this.episodes = res[0];});
  }
}
