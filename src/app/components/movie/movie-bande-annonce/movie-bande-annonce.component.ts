import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from '../../../models/movie';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-movie-bande-annonce',
  templateUrl: './movie-bande-annonce.component.html',
  styleUrls: ['./movie-bande-annonce.component.css']
})
export class MovieBandeAnnonceComponent implements OnInit, OnChanges {
  
  @Input()
  movie: Movie;
  
  dangerousUrl: string;
  dangerousVideoUrl: string;
  trustedUrl: SafeUrl;
  videoUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) {
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl); 
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['movie'];
    if (change.currentValue) {
      this.updateVideoUrl(this.movie.bande_annonce);
    }
  }

  updateVideoUrl(key: string) {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + key;
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
