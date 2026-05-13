import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击"跳过"跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      activityIds: [
        'com.zhihu.android.app.ui.activity.LauncherActivity',
        'com.zhihu.android.app.ui.activity.LaunchAdActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[vid="btn_skip"][text^="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/27632237',
            'https://i.gkd.li/i/1778644443806',
          ],
        },
      ],
    },
  ],
});
