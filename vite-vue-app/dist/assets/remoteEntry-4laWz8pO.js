const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vue.runtime.esm-bundler-DQRxbpKd.js","assets/index-CE2qAFNW.js"])))=>i.map(i=>d[i]);
import { i as index_cjs, v as vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__ } from './vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__-DHK01JoI.js';
import exposesMap from './virtualExposes-Cegx0wZP.js';
import { _ as __vitePreload } from './preload-helper-ZHziiP-1.js';
import { p as proxyWin } from './index-CE2qAFNW.js';

const importMap = {
  "vue": async () => {
    let pkg = await __vitePreload(() => import('./vue.runtime.esm-bundler-DQRxbpKd.js'),true              ?__vite__mapDeps([0,1]):void 0);
    return pkg;
  }
};
const usedShared = {
  "vue": {
    name: "vue",
    version: "3.5.16",
    scope: ["default"],
    loaded: false,
    from: "vite-vue-app",
    async get() {
      usedShared["vue"].loaded = true;
      const {
        "vue": pkgDynamicImport
      } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = {
        ...res
      };
      // All npm packages pre-built by vite will be converted to esm
      proxyWin.proxy.Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function () {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: false,
      requiredVersion: "^3.5.16"
    }
  }
};
const usedRemotes = [];

const initTokens = {};
  const shareScopeName = "default";
  const mfName = "vite-vue-app";
  async function init(shared = {}, initScope = []) {
    const initRes = index_cjs.init({
      name: mfName,
      remotes: usedRemotes,
      shared: usedShared,
      plugins: [],
      shareStrategy: 'version-first'
    });
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken)
      initToken = initTokens[shareScopeName] = { from: mfName };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    initRes.initShareScopeMap('default', shared);
    try {
      await Promise.all(await initRes.initializeSharing('default', {
        strategy: 'version-first',
        from: "build",
        initScope
      }));
    } catch (e) {
      console.error(e);
    }
    vite_mf_2_vue_mf_2_app__mf_v__runtimeInit__mf_v__.initResolve(initRes);
    return initRes
  }

  function getExposes(moduleName) {
    if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
