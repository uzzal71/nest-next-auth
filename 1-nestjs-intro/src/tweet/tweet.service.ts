import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetService {
  getTweets(): string {
    return 'This is a tweet';
  }
}
