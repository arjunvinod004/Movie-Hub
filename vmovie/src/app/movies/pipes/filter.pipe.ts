import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allmovies:[],searchkey:string,propname:string): any[] {
    const result:any=[];
   //empty
    if(!allmovies ||searchkey=='' ||propname==''){
      return allmovies;
    }
    // searching
    allmovies.forEach((movie:any)=>{
      if(movie[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(movie);
      }
      
    })
    return result;
  }

}
