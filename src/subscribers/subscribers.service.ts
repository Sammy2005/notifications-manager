import { Injectable } from '@nestjs/common';
import { InjectNovu } from '../novu/novu.provider';
import { Novu } from '@novu/node';

@Injectable()
export class SubscribersService {
  constructor(@InjectNovu() private readonly novu: Novu) {}

  async createSubscriber(subscriberId: string, email: string) {
    const result = await this.novu.subscribers.identify(subscriberId, {
      email,
      firstName: 'Subscriber',
    });

    return result.data;
  }
}
