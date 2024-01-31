import { Body, Controller, Param, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Post('emails')
  sendEmail(
    @Body() body: { subscriberId: string; email: string; description: string },
  ) {
    return this.notificationService.sendEmail(
      body.subscriberId,
      body.email,
      body.description,
    );
  }

  @Post('sms')
  sendSMS(@Body() body: { subscriberId: string; to: string; message: string }) {
    return this.notificationService.sendSMS(
      body.subscriberId,
      body.to,
      body.message,
    );
  }
}
