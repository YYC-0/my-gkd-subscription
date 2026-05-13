import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '自动点击跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'cn.damai.launcher.splash.SplashMainActivity',
      rules: [
        {
          key: 0,
          name: '跳过按钮',
          matches:
            '[vid="homepage_advert_pb"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778641789987',
        },
      ],
    },
  ],
});
