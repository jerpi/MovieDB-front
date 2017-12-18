import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {FormControl} from "@angular/forms";
import {distinctUntilChanged, debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl = new FormControl();

  @Input()
  cast: boolean;

  @Input()
  movie: boolean;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.searchControl
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      ).subscribe((item) => {
        console.log(item);
    });
  }

}
