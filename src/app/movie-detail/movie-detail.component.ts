import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesInfoService } from '../movies-info.service'; 
 
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public movie;
  public returnPage;

  constructor(
    private route:ActivatedRoute,
    public MoviesInfoService: MoviesInfoService
  ) { }

  ngOnInit(): void {
    this.loadMovie()
  }

  loadMovie()
  {
    const movieId = +this.route.snapshot.paramMap.get('id');
    this.MoviesInfoService.getById(movieId).subscribe((data: any[])=>{
      this.movie = Object.assign({}, data);
    })
  }
}
