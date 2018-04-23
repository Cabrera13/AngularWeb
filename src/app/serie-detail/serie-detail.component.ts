import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SeriesDataService } from '../services/series-data.service';
import { Serie } from '../serie';
import { Season} from '../season';
@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {
  serie: Serie;
  seasons : Season;
  id: number;

  constructor(private _data: SeriesDataService,
              private route: ActivatedRoute,
              private router : Router,
              private location: Location) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this.getSerie();
    this.getSeasons();
  }
  getSerie(): void {
    console.log(this.id);
    this._data.getSerie(this.id).subscribe (
      s => {
          if (s) {
            this.serie = s[0];
          }
        }
      );
    }
  deleteSerie(): void {
    this._data.deleteSerie(this.id);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
  getSeasons() : void {
    console.log(this.id);
    this._data.getSeasons(this.id).subscribe (
      s => {
          if (s) {
            console.log(s);
            this.seasons = s;
          }
        }
      );
    console.log(this.seasons);
  }
  save() {
    this._data.updateSerie(this.serie);
  }
}
