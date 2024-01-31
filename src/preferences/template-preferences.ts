import { ChannelTypeEnum } from '@novu/node';

export class TemplatePreferences {
  preferences: PreferenceItem;
}

export class PreferenceItem {
  type: ChannelTypeEnum;
  enabled: boolean;
}
