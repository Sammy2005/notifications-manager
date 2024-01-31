import { ChannelTypeEnum } from '@novu/node';

export class GlobalPreferences {
  preferences: PreferenceItem[];
}

export class PreferenceItem {
  type: ChannelTypeEnum;
  enabled: boolean;
}
