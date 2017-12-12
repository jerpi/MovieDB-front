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
      this.getMovie(params['id']);
    });
  }

  getMovie(id: string): void {
    this.movieService
      .getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }
}
