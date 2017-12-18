import {User} from "./user";

export class Post {
  user: User;
  title: string;
  content: string;
  note?: number;
}
