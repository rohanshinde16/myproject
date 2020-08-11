import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesInfoService {

  public list;
  public movieUrl;
  public pageNo = 1;

  constructor(private http: HttpClient){

  }

  getData(pageNo:number) 
  {
    const url:string = `https://api.themoviedb.org/3/movie/popular?api_key=b465096d440ed115548787b1faa956f3&language=en-US&page=${pageNo}`;
    return this.http.get(url);
  }

  getById(movieId: number):Observable<any>{
    const movieurl =`https://api.themoviedb.org/3/movie/${movieId}?api_key=b465096d440ed115548787b1faa956f3&language=en-US`;
    return this.http.get(movieurl); 
  }
}
