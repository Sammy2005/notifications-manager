import { Body, Controller, Post } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {

  constructor(private readonly subscribersService: SubscribersService) {}

  @Post('subscribers')
  createSubscriber(@Body() body: { subscriberId: string; email: string }) {
    return this.subscribersService.createSubscriber(
      body.subscriberId,
      body.email,
    );
  }
}
