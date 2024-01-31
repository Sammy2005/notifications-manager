import { Injectable, Logger } from '@nestjs/common';
import { Novu, TriggerRecipientsTypeEnum } from '@novu/node';
import { InjectNovu } from '../novu/novu.provider';

@Injectable()
export class NotificationsService {
  log = new Logger('NotificationsService');

  constructor(@InjectNovu() private readonly novu: Novu) {}

  async createSubscriber(subscriberId: string, email: string) {
    const result = await this.novu.subscribers.identify(subscriberId, {
      email,
      firstName: 'Subscriber',
    });

    return result.data;
  }

  async sendEmail(subscriberId: string, email: string, description: string) {
    const result = await this.novu.trigger('email-quickstart', {
      to: {
        subscriberId,
        email,
      },
      payload: {
        email,
        description,
      },
    });

    return result.data;
  }

  async sendSMS(subscriberId: string, to: string, message: string) {
    const result = await this.novu.trigger('sms-quickstart', {
      to: {
        subscriberId: subscriberId,
        phone: to,
      },
      payload: {
        to: to,
        content: message,
      },
    });

    return result.data;
  }
}
