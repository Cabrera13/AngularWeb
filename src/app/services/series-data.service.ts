import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../serie';
import { of } from 'rxjs/observable/of';
import { Season } from '../season';
import { Episode } from '../episode';

import MOCK_SERIES from './mock-series';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class SeriesDataService {
  SERIES = MOCK_SERIES;
  public series = [];
  constructor(private router : Router, private firebaseAuth: AngularFireAuth, private af : AngularFireDatabase, private auth : AuthService) { }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////             Series            /////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
 /* getSeries():  Observable<any[]> {

    return this.af.database.list(this.auth.userDetails.uid).valueChanges();
  
  }
  getSerie(id: number):  Observable<any> {
    return of(this.SERIES.find(serie => serie.id == id));
  }
  */
 getSeries():  Observable<any[]> {
   return this.af.list(this.auth.usdet()).valueChanges();
  }
  
  getSerie(id): Observable<any> {
    return this.af.list(this.auth.usdet(), ref => ref.orderByKey().equalTo(id)).valueChanges();
}

  /** POST:  add a new serie to the server */
  /*addSerie (title: string, image: string, country: string, description: string, first : string ):  void {
    const maxId = this.SERIES.reduce((total, s) => (s.id > total) ? s.id :  total, 1);
    const serie:  Serie =  {
      id:  maxId + 1,
      Title:  title,
      Image:  image,
      Country:  country,
      Description:  description,
      First_Episode_Air_Date:  first,
      Seasons:  []
    };
    this.SERIES.push(serie);
  }
*/
  addSerie (id : number, title: string, image: string, country: string, description: string, first : string ):  void {
    console.log(this.series);
    //const maxId = this.SERIES.reduce((total, s) => (s.id > total) ? s.id :  total, 1);
    const serie:  Serie =  {
      id: id,
      Title:  title,
      Image:  image,
      Country:  country,
      Description:  description,
      First_Episode_Air_Date:  first,
      Seasons:  Array<Season>()
    };
    this.af.list(this.auth.usdet()).set(id.toString(), serie);
  }
  /*
  addFromSearch(serie : Serie) {
    const maxId = this.SERIES.reduce((total, s) => (s.id > total) ? s.id :  total, 1);
    serie.id =  maxId + 1,
    this.SERIES.push(serie);

  }
*/
addFromSearch(serie : Serie) {
  console.log(serie);
  //const maxId = this.SERIES.reduce((total, s) => (s.id > total) ? s.id :  total, 1);
  //serie.id =  maxId,
  //this.SERIES.push(serie);
  this.af.list(this.auth.usdet()).set(serie.id.toString(), serie);
  
}
/*
  deleteSerie (id: number):  void {
    const index = this.SERIES.findIndex(s => s.id == id);
    this.SERIES.splice(index, 1);
    
  }


  updateSerie (serie: Serie):  void {
    const index = this.SERIES.findIndex(s => s.id == serie.id);
    this.SERIES[index] = serie;
  }
*/
deleteSerie (id: number):  void {
  const index = this.SERIES.findIndex(s => s.id == id);
  this.SERIES.splice(index, 1);
  this.af.list(this.auth.usdet()).remove(id.toString());

}

/** PUT:  update the serie on the server */
updateSerie (serie: Serie):  void {
  this.af.list(this.auth.usdet()).set(serie.id.toString(), serie);
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////            Seasons            /////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  getSeasons(id: number):  Observable<any> {
    return of(this.SERIES.find(serie => serie.id == id).Seasons);
  }
  getSeason (id: number, num : number): Observable<any> {
    return of (this.SERIES.find(serie => serie.id == id).Seasons.find(season => season.Number == num))
  }
  */
 getSeasons(id: number):  Observable<any> {
  return this.af.list(`${this.auth.usdet()}/${id.toString()}/Seasons`).valueChanges();
}
getSeason (id: number, num : number): Observable<any> {
  console.log(id)
  console.log(num)
  return this.af.list(`${this.auth.usdet()}/${id.toString()}/Seasons`, ref => ref.orderByKey().equalTo(num)).valueChanges();
}
  addSeasons (id: number, nmseason : number, Image: string, First : string, Last : string):  void {
    //const indx = this.SERIES.findIndex(s => s.id == id);
    //const mxd = this.SERIES[indx].Seasons.reduce((total, s) => (s.Number > total) ? s.Number :  total, 0);
    const season :  Season =  {
      Number:  nmseason,
      Image: Image,
      First_Episode_Air_Date: First,
      Last_Episode_Air_Date: Last,
      Episodes : []
    };
    //this.SERIES[indx].Seasons.push(season);
    this.af.list(`${this.auth.usdet()}/${id.toString()}/Seasons`).set(nmseason.toString(), season);
  }
  deleteSeasons (id: number, num : number):  void {
    //const index = this.SERIES[this.SERIES.findIndex(s => s.id == id)].Seasons.findIndex(s => s.Number == num);
    //this.SERIES[this.SERIES.findIndex(s => s.id == id)].Seasons.splice(index, 1);
    this.af.list(`${this.auth.usdet()}/${id.toString()}/Seasons/`).remove(num.toString());
  }
  updateSeasons (id : number, num : number, season: Season):  void {
    //const index = this.SERIES[this.SERIES.findIndex(s => s.id == id)].Seasons.findIndex(s => s.Number == season.Number);
    this.af.list(`${this.auth.usdet()}/${id.toString()}/Seasons/`).set(num.toString(), season);

    //this.SERIES[this.SERIES.findIndex(s => s.id == id)].Seasons[index] = season;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////           Episodes            /////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  getEpisodes(id: number, num : number):  Observable<any> {
   // return of(this.SERIES.find(serie => serie.id == id).Seasons.find(season => season.Number == num).Episodes);
   return this.af.list(`${this.auth.usdet()}/${id.toString()}/Seasons/${num.toString()}`).valueChanges();
  }
  getEpisode(id : number, num: number, epi : number) : Observable<any> {
    return this.af.list(`${this.auth.usdet()}/${id.toString()}/Seasons/${num.toString()}/Episodes/`, ref =>ref.orderByKey().equalTo(epi.toString())).valueChanges();

  }
  deleteEpisode (id:number, num: number, epi: number){
    this.af.list(`${this.auth.usdet()}/${id}/Seasons/${num.toString()}/Episodes/`).remove(epi.toString());
  }
  updateEpisode (id: number, num : number, epi: number, episode: Episode) {
    this.af.list(`${this.auth.usdet()}/${id}/Seasons/${num.toString()}/Episodes/`).set(epi.toString(), episode);

  }
  addEpisodes (id: number, num: number, epi: number, name : string, airdate: string, rating : number, number: number){
    //const indx = this.SERIES.findIndex(s => s.id == id);
    //const indxn = this.SERIES[indx].Seasons.findIndex(s => s.Number == num); 
    //const mxd = this.SERIES[indx].Seasons[indxn].Episodes.reduce((total, s) => (s.Number > total) ? s.Number :  total, 0);
    const episode :  Episode =  {
      AirDate: airdate,
      Name: name,
      Number:  number,
      Rating: rating,
      Watched: false,
    };
    //this.SERIES[indx].Seasons[indxn].Episodes.push(episode); 
    this.af.list(`${this.auth.usdet()}/${id}/Seasons/${num.toString()}/Episodes/`).set(epi.toString(), episode);
   
  }
}
