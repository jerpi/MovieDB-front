import { Component, OnInit } from '@angular/core';
import {Cast} from '../../../models/Cast';
import {CastService} from '../../../services/cast.service';

@Component({
  selector: 'app-cast-showcase',
  templateUrl: './cast-showcase.component.html',
  styleUrls: ['./cast-showcase.component.css']
})
export class CastShowcaseComponent implements OnInit {

  cast: Array<Cast>;
  constructor(private castService: CastService) { }

  ngOnInit() {
    this.getCast();
  }

  getCast(): void {
    this.castService.getCast()
      .subscribe(cast => this.cast = cast);
  }

}
