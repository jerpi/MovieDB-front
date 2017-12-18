import {User} from "./User";

export class Post {
  user: User;
  title: string;
  content: string;
  note?: number;
}
