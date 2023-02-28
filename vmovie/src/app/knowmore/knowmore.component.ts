import { Component, OnInit } from '@angular/core';
import { ApiService } from '../movies/api.service';
import { CartService } from '../movies/cart.service';

@Component({
  selector: 'app-knowmore',
  templateUrl: './knowmore.component.html',
  styleUrls: ['./knowmore.component.css']
})
export class KnowmoreComponent implements OnInit {
knowDetails:any=[]
  constructor(private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.knowDetails= this.api.knowdetails
  }
  

}
