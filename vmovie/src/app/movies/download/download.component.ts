import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
 downitems:any=[]
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.downitems=this.api.viewDwon
    //alert('your movie is downloading...')
  }

}
