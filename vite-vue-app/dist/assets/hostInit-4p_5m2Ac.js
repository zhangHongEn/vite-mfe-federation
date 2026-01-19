const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/remoteEntry-4laWz8pO.js","assets/vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__-DHK01JoI.js","assets/index-CE2qAFNW.js","assets/virtualExposes-Cegx0wZP.js","assets/preload-helper-ZHziiP-1.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-ZHziiP-1.js';
import { p as proxyWin } from './index-CE2qAFNW.js';

const remoteEntryPromise = __vitePreload(() => import('./remoteEntry-4laWz8pO.js'),true              ?__vite__mapDeps([0,1,2,3,4]):void 0);
// __tla only serves as a hack for vite-plugin-top-level-await. 
proxyWin.proxy.Promise.resolve(remoteEntryPromise).then(remoteEntry => {
  return proxyWin.proxy.Promise.resolve(remoteEntry.__tla).then(remoteEntry.init).catch(remoteEntry.init);
});
