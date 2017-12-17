import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/Post";
import {Cast} from "../../models/Cast";
import {Movie} from "../../models/Movie";

@Component({
  selector: 'app-post-area',
  templateUrl: './post-area.component.html',
  styleUrls: ['./post-area.component.css'],
  providers: [PostsService]
})
export class PostAreaComponent implements OnChanges {

  loading: boolean;
  posts: Post[] = [];

  @Input()
  movie?: Movie;
  @Input()
  cast?: Cast;

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    if (changes['movie']) {
      this.getPosts(this.movie._id);
    } else if (changes['cast']) {
      this.getPosts(this.cast._id);
    }
  }

  getPosts(id: string) {
    this.postsService.getPosts(id)
      .subscribe(
        posts => {
          this.posts = posts;
          this.loading = false;
        }
      );
  }


}
