import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";
import {Cast} from "../../models/cast";
import {Movie} from "../../models/movie";

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
    if (changes['movie']) {
      this.getPosts(this.movie._id);
    } else if (changes['cast']) {
      this.getPosts(this.cast._id);
    }
  }

  getPosts(contentId: string): void {
    this.loading = true;
    this.postsService.getPosts(contentId)
      .subscribe(
        posts => {
          this.posts = posts;
          this.loading = false;
        }
      );
  }


}
