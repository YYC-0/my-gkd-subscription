import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 9869, // 随机大数字，避免与其他订阅冲突
  name: 'My Subscription',
  version: 0,
  author: 'me',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: '',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
