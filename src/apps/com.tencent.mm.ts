import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '小程序广告',
      desc: '自动关闭小程序中的广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'activity',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          name: '跳过按钮',
          matches: '@FrameLayout > [text="跳过"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778655439575',
        },
        {
          key: 1,
          name: '关闭按钮',
          matches:
            '[vid="gn"][desc="关闭"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778655439575',
        },
      ],
    },
  ],
});
