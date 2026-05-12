import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      activityIds: 'com.MobileTicket.ui.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="tv_skip"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778585029575',
        },
      ],
    },
  ],
});
