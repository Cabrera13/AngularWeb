import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../serie';
import { SeriesDataService } from '../services/series-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SerieCreateComponent implements OnInit {

  Image = "";
  First_Episode_Air_Date = "";
  description = "";
  country = "";
  title = "";
  series = Array<Serie>();
  id : number;
constructor(private _data: SeriesDataService){}
  ngOnInit() {
    this.getSeries();
  }

  getSeries() : void {this._data.getSeries().subscribe ( s => { (s) ?  this.series = s : null });}

  addSerie(): void {
    //afegir la id sempre 1 número més que l'últim element que serà l'últim ordenat numèricament
    this.series.map((elem,i)=> {this.id = elem.id+1})
    this._data.addSerie(this.id, this.title,this.Image, this.country, this.description, this.First_Episode_Air_Date);
  }
}