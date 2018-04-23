import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SeriesDataService } from '../services/series-data.service';
import { Episode } from '../episode';
import {Location} from '@angular/common';

@Component({
  selector: 'app-episodi-details',
  templateUrl: './episodi-details.component.html',
  styleUrls: ['./episodi-details.component.css']
})
export class EpisodiDetailsComponent implements OnInit {
  episode : Episode;
  id : number;
  num : number;
  nums: number;
  constructor(private _data: SeriesDataService,
    private route : ActivatedRoute,
    private router : Router,
    private location: Location){
      this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.num = params['num'];
        this.nums = params['epi'];
      });
    }

  ngOnInit() {
    this.getEpisode();
  }
  
  getEpisode() {
    console.log(this.id);
    this._data.getEpisode(this.id, this.num, this.nums).subscribe (
      s => {
          if (s) {
            this.episode = s[0];
            
            console.log(s)
          }
        }
      );
    console.log(this.episode);
  }
  goBack() {
    this.location.back();
  }
  save(): void {
    this._data.updateEpisode(this.id, this.num, this.nums, this.episode);
  }
  deleteEpisode() : void{
    this._data.deleteEpisode(this.id, this.num, this.nums);
    this.location.back();

  }
}
