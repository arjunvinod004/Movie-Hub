import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-watchlater',
  templateUrl: './watchlater.component.html',
  styleUrls: ['./watchlater.component.css']
})
export class WatchlaterComponent implements OnInit {
watchlater:any
errmsg:any
wishlist:any
  constructor(private api:ApiService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getwatchlater().subscribe(
      (data:any)=>{
 this.watchlater=data.movies
 console.log(this.watchlater)
 if(this.watchlater.length==0){
  this.errmsg='empty watchlater'
 }
      },
      (data:any)=>{
        this.errmsg=data.error.message
      }
    )
  }
  deletewatch(movie:any){
  this.api.deletewatch(movie.id).subscribe(
   (result:any)=>{
  alert(result.message)
  this.router.navigateByUrl('watchlater')
  this.wishlist=result.wishlist
  location.reload()
  // if(this.wishlist.lenght==0){
  //   this.errmsg='Emty Wishlist'
  // }
  
  
},
  (result:any)=>{
    this.errmsg = movie.error.message
  }
)
  }
  adddownload(movie:any){
    this.api.adddownload(movie)
    this.router.navigateByUrl('/download')
    }

}
