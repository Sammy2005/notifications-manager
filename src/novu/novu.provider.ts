import { Inject, Provider } from '@nestjs/common';
import { Novu } from '@novu/node';
import { ConfigService } from '@nestjs/config';

const NOVU_PROVIDER_TOKEN = 'NOVU_PROVIDER_TOKEN';

export const NovuProvider: Provider = {
  provide: NOVU_PROVIDER_TOKEN,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const NOVU_API_KEY = config.get('NOVU_API_KEY');
    const host = {
      backendUrl: config.get('NOVU_HOST'),
    };
    return new Novu(NOVU_API_KEY, host);
  },
};

export const InjectNovu = () => Inject(NOVU_PROVIDER_TOKEN);
