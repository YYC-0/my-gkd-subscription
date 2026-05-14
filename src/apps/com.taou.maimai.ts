import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taou.maimai',
  name: '脉脉',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击"跳过"跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      activityIds: 'com.taou.maimai.MainActivity',
      rules: [
        {
          key: 0,
          name: '普通跳过按钮',
          matches:
            '[vid="skipBtnNormal"][text^="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778584345345',
        },
        {
          key: 1,
          name: '全屏跳过按钮',
          matches:
            '[vid="skipBtnFullscreen"][text^="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778760620380',
        },
      ],
    },
  ],
});
