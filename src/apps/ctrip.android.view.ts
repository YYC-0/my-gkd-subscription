import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击"跳过广告"跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      activityIds:
        'ctrip.android.publicproduct.home.business.activity.CtripHomeActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="a"][text="跳过广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778585036842',
        },
      ],
    },
  ],
});
