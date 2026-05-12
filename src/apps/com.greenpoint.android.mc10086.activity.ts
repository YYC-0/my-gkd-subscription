import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 0,
      name: '首页弹窗广告',
      desc: '关闭首页悬浮广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'activity',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules: [
        {
          key: 0,
          name: '悬浮广告关闭按钮',
          matches:
            '[vid="close_btn_bottom"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778586245573',
        },
        {
          key: 1,
          name: '视频广告跳过按钮',
          matches:
            '[vid="video_time_skip"][text*="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/1778586245573',
        },
      ],
    },
  ],
});
