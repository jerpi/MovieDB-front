import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../../models/Cast';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  @Input()
  cast: Cast;

  constructor() { }

  ngOnInit() {
  }

}
