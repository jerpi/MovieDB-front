import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../../models/cast';

@Component({
  selector: 'app-movie-actors',
  templateUrl: './movie-actors.component.html',
  styleUrls: ['./movie-actors.component.css']
})
export class MovieActorsComponent implements OnInit {

  @Input()
  cast: Cast;

  constructor() { }

  ngOnInit() {
  }

}
