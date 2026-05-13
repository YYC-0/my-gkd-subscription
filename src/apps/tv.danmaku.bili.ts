import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '自动点击跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'tv.danmaku.bili.splash.ad.page.HotSplashActivity',
      rules: [
        {
          key: 0,
          name: '跳过按钮',
          matches:
            '[vid="count_down"][text*="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778602099884',
        },
      ],
    },
  ],
});
