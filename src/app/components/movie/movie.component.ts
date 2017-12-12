import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MovieService } from '../../services/movie.service';
import { CastService } from '../../services/cast.service';
import { ActivatedRoute } from "@angular/router";
import { Movie } from '../../models/movie';
import { Cast } from '../../models/Cast';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;
  movie: Movie;
  cast: Cast;
  dangerousUrl: string;
  dangerousVideoUrl: string;
  trustedUrl: SafeUrl;
  videoUrl: SafeResourceUrl;

  constructor(
    private movieService: MovieService,
    private castService: CastService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { 
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getMovie(this.id);
      this.getCast(this.id);
      
   });
  }

  getMovie(id: number): void {
    this.movieService
      .getMovies()
      .subscribe(movies => {
        const arr = movies.filter(movie => movie.id === id);
        this.movie = arr[0];
        this.updateVideoUrl(this.movie.bande_annonce);
      });
  }

  getCast(id: number): void {
    this.castService
        .getCast()
        .subscribe(casts => {
          const arr = casts.filter(cast => cast.id === id);
          this.cast = arr[0];
        });
  }

  updateVideoUrl(key: string) {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + key;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

  

}
