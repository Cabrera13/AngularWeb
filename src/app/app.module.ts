import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
//  dades
import { SeriesDataService } from './services/series-data.service';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { HttpClientModule } from '@angular/common/http';
import { SeasonCreateComponent } from './season-create/season-create.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { EpisodiCreateComponent } from './episodi-create/episodi-create.component';
import { EpisodiDetailsComponent } from './episodi-details/episodi-details.component';
import {AuthService} from './services/auth.service'
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './auth-guard.guard';
import { firestore } from 'firebase';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  // només si voleu animacions

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    SerieDetailComponent,
    SerieCreateComponent,
    SeasonCreateComponent,
    SeasonDetailsComponent,
    EpisodiCreateComponent,
    EpisodiDetailsComponent,
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [SeriesDataService, AuthService, AuthGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
