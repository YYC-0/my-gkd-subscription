import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '自动点击跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '跳过广告按钮',
          matches:
            '@LinearLayout[clickable=true][visibleToUser=true] > [text="跳过广告"]',
          snapshotUrls: 'https://i.gkd.li/i/1778641697416',
        },
      ],
    },
  ],
});
