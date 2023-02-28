import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
allmovies:any=[];
searchterm:string='';
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getMovies().subscribe(
      (data:any)=>{
        this.allmovies=data.movies
              }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
    
  }
  savetowatchlater(movie:any){
    this.api.savetowatchlater(movie).subscribe(
      (result:any)=>{
    alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
  know(movie:any){
    this.api.know(movie)
    this.router.navigateByUrl('knowmore')

  }

}
