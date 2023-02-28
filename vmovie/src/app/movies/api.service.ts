import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
searchkey= new BehaviorSubject('')

knowdetails:any=[]
viewDwon:any=[]

  constructor(private http:HttpClient) { }

  userDetails:any={
  
    sijo:{username:'sijo',password:5000,mobilenumber:'9048625121'},
    devan:{username:'devan',password:5001, mobilenumber:'9541236781'},
    gokul:{username:'gokul',password:5002, mobilenumber:'9048621825'}
  }
  register(username:any,password:any,mobilenum:any){
    const data={
      username,
      password,
      mobilenum
    }
    return this.http.post('http://localhost:3000/register/',data)
  }
   // let userDetails = this.userDetails
    // if(uname in userDetails){
    //   return false;
    // }
    // else{
    //   userDetails[uname]={
    //     uname:uname,
    //     password:password,
    //     mobilenum:mobilenum
    //   }
    //   console.log(userDetails);
     
    //    return true;
    // }

    login(uname:any,pswd:any){
      const data={
        uname,
        pswd
      }
      return this.http.post('http://localhost:3000/login/',data)
    }
    
 // let userDetails=this.userDetails
    // if(uname in userDetails){
    //   if(pswd==userDetails[uname]['password']){
    //     this.currentUser=userDetails[uname]['password']
       
    //    return true;
    //   }
    //   else{
    //     return false;
    //   }
      
    // } 
    // else{
    //   return false;
    // }

   
  getMovies(){
   return this.http.get('http://localhost:3000/all-movies')
  }
  savetowatchlater(movie:any){
    const body={
      id:movie.id,
      Title:movie.Title,
      Poster:movie.Poster,
      Year:movie.Year,
      Genre:movie.Genre,
      Released:movie.Released,
      imdbRating:movie.imdbRating,
      imdbVotes:movie.imdbVotes,
      Language:movie.Language,
      Plot:movie.Plot

    }
    return this.http.post('http://localhost:3000/savetowatchlater',body)
  }
  // get watchlater
  getwatchlater(){
    return this.http.get('http://localhost:3000/getwatchlater')
  }
  deletewatch(id:any){
    return this.http.delete('http://localhost:3000/deletewatch/'+id)
  }
  know(movie:any){
    this.knowdetails=movie
  }

  adddownload(movie:any){
    this.viewDwon=movie

  }
  
}
