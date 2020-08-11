import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInfoService } from '../movies-info.service'; 
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public name = 'Vidhyadhan';
  public movies;
  public movie;
  public returnPageNo;
  config: any;
  collection = [];
  
  constructor(public MoviesInfoService: MoviesInfoService,
    private router: Router,
    private route: ActivatedRoute
    ) 
  {
    this.config = {
      currentPage: 1,
      itemsPerPage: 20,
      totalItems:1000
    };

  }

  ngOnInit() 
  {
    this.MoviesInfoService.getData(1).subscribe((data: any[])=>{
      this.movies = data['results'];
    })

    this.route.queryParams.subscribe(
    params => this.config.currentPage= params['page']?params['page']:1 );
  }

  pageChange(newPage: number) {
    this.MoviesInfoService.getData(newPage).subscribe((data: any[])=>{
      this.movies = data['results'];
    })
    this.router.navigate([''], { queryParams: { page: newPage } });
    this.returnPageNo = newPage -1;
  }
}
