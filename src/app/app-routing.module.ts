import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { SeasonCreateComponent } from './season-create/season-create.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { EpisodiCreateComponent } from './episodi-create/episodi-create.component';
import { EpisodiDetailsComponent } from './episodi-details/episodi-details.component';
import { AuthGuard } from './auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'series',
    component: SeriesComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'serie/:id',
    component: SerieDetailComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'serie-create',
    component: SerieCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'serie/:id/season-create',
    component: SeasonCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'serie/:id/season-details/:num',
    component: SeasonDetailsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'serie/:id/:num/episodi-create',
    component: EpisodiCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'serie/:id/season-details/:num/:epi',
    component: EpisodiDetailsComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
