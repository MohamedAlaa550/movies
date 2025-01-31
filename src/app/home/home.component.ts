import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { IMovie } from '../interfaces/imovie';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  moviesService= inject(MoviesService)

  moviesList:IMovie[]=[]

  imgPath:string ="https://image.tmdb.org/t/p/w500"

getmovise():void{
  this.moviesService.subscribeMovies().subscribe({
    next:(res)=>{this.moviesList = res.results;
    },
    error:(err)=>{console.log(err)}
  })
}

ngOnInit(): void {
  this.getmovise()
}


}
