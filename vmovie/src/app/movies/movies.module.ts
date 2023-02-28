import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import{ HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { DownloadComponent } from './download/download.component'


@NgModule({
    declarations: [
        MoviesComponent,
        AllMoviesComponent,
        WatchlaterComponent,
        FilterPipe,
        DownloadComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        HttpClientModule,
        
    ]
})
export class MoviesModule { }
