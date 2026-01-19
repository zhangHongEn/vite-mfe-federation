const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-DBrnoDQF.js","assets/preload-helper-ZHziiP-1.js","assets/index-CE2qAFNW.js","assets/vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__-DHK01JoI.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-ZHziiP-1.js';

const exposesMap = {
    
        "./main": async () => {
          const importModule = await __vitePreload(() => import('./main-DBrnoDQF.js').then(n => n.m),true              ?__vite__mapDeps([0,1,2,3]):void 0);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      
  };

export { exposesMap as default };
