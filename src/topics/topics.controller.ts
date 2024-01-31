import { Body, Controller, Param, Post } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topic } from './topic';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}
  @Post('topics')
  createTopic(@Body() topic: Topic) {
    return this.topicsService.createTopic(topic);
  }

  @Post('topics/:key/subscribers')
  addSubscriberToTopic(
    @Param('key') key: string,
    @Body('subscriberIds') subscriberIds: string[],
  ) {
    return this.topicsService.addTopicSubscriber(key, subscriberIds);
  }

  @Post('topics/:key/send')
  sendTopicNotification(
    @Param('key') key: string,
    @Body('description') description: string,
  ) {
    return this.topicsService.sendTopicNotification(key, description);
  }
}
