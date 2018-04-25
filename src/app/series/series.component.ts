import { Component, OnInit, NgModule } from '@angular/core';
import { SeriesDataService } from '../services/series-data.service';
import { Serie } from '../serie';
import { NgClass } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {JsonpModule, Jsonp} from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';


import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Episode } from '../episode';
import { Season } from '../season';
import { print } from 'util';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})

export class SeriesComponent implements OnInit {

  API_KEY = '2df4c969e27ca92e563ccad3694aac5e';
  showTVSerieList = false;
  showTVSerie = false;
  notFound = false;
  message = '';
  serieListResult = [];
  newSerie: Serie;
  series = [];
  episode : Episode;
  season: Season;
  constructor(private http: HttpClient, private router : Router, private _data: SeriesDataService) {}
  
  ngOnInit() {
    this._data.getSeries().subscribe(res => this.series = res);
  }
  
  searchTMDB(text: string) {
    if (text !== ""){
    this.showTVSerieList = false;
    this.showTVSerie = false;
    this.message = '';
    this.serieListResult = [];
    this.http.get('http://api.themoviedb.org/3/search/tv?api_key=' + 
			this.API_KEY + '&query=' + encodeURI(text))
        .subscribe((response: any) => {
            if (response.results.length > 0) {
                this.serieListResult = response.results;
                this.serieListResult.map(item => {
                    if (item.poster_path) {
                      item.poster_path = 'http://image.tmdb.org/t/p/original' + 
						item.poster_path;
                    }
                });
               console.log(this.serieListResult);
               this.showTVSerieList = true;
            } else {
              this.notFound = true;
              this.message = 'No series matched with the requested query!!!';
            }
        }
    );
  }
  else {
    this.serieListResult = []
  }
  }


 getSerieTMDB(id) {
    this.showTVSerieList = false;
    this.showTVSerie = false;

    this.http.get('http://api.themoviedb.org/3/tv/' + id + '?api_key=' + this.API_KEY ).subscribe((response: any) => {
      // Create a basic serie object
      this.newSerie = {
        id : id,
        Title : response.name,
        Image : (response.backdrop_path) ? 'http://image.tmdb.org/t/p/original' + response.backdrop_path : null,
        Country : response.origin_country,
        Description : response.overview,
        First_Episode_Air_Date : response.first_air_date,
        Seasons : []
      };

      // Preparar les temporades
      const seasons: Array<Season> = [];
      response.seasons.map(obj => {
          const season = new Season;
          season['Number'] = obj.season_number;
          season['Image'] = (obj.poster_path) ? 'http://image.tmdb.org/t/p/original' + obj.poster_path : null;
          season['First_Episode_Air_Date'] = obj.air_date;
          season['Last_Episode_Air_Date'] = obj.air_date;
          season['Episodes'] = [];
          seasons[obj.season_number] = season;
      });
      this.newSerie.Seasons = seasons;
      const lastSeason = this.newSerie.Seasons.length - 1;
      this.showTVSerie = true;
      this.newSerie.Seasons.map((season, index) => {
        this.http.get('http://api.themoviedb.org/3/tv/' + id + '/season/' + season.Number + '?api_key=' + this.API_KEY ).subscribe((res: any) => {
          season.Last_Episode_Air_Date = res.episodes[res.episodes.length-1]
								.air_date;
          // afegir la información de tots els episodis
          const episodes: Array<Episode> = [];
          const formattedEpisodes = res.episodes.map(obj => {
            const episode = new Episode;
              episode['Number'] = obj.episode_number;
              episode['Name'] = obj.name;
              episode['AirDate'] = obj.air_date;
              episode['Watched'] = false;
              episode['Rating'] = 0;
              episodes[obj.episode_number] = episode;
          });
          season.Episodes = episodes;
        });
      });
    }, (response) => {
      // error callback
      console.log('error de connexió');
    });
  }
  
    addNew(s : Serie) {
      console.log(this.newSerie);

      this._data.addFromSearch(s);
    }

    numepisodes():number {
      var numEpisodes = 0;
      this.newSerie.Seasons.map((elem, i)=> {
        return elem.Episodes.map((elem, i) => {
          numEpisodes++;
        })
      })
      return numEpisodes;
    }
  /*
  search(term: string) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=2df4c969e27ca92e563ccad3694aac5e&language=en-US&page=1&include_adult=false&query=${encodeURIComponent(this.query)}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).subscribe(data => {this.movies = data.json().results;});
  }*/


}



