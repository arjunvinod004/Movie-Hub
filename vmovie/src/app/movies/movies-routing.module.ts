import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowmoreComponent } from '../knowmore/knowmore.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { DownloadComponent } from './download/download.component';

import { MoviesComponent } from './movies.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';

const routes: Routes = [
  { path: '', component: AllMoviesComponent },
  {path:'watchlater',component:WatchlaterComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'knowmore',component:KnowmoreComponent},
  {path:'download',component:DownloadComponent}
 
  // {path:'all-movies',component:}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
