import DefaultTheme from 'vitepress/theme';
import { watch } from 'vue';
import 'element-plus/dist/index.css';

import './custom.css';

import { h } from 'vue';
import AppPreview from './components/AppPreview.vue';
export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-after': () => h(AppPreview),
    });
  },
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      let viewer;
      const setup = () => {
        const container = document.querySelector('.vp-doc');
        if (container != null) {
          if (viewer) {
            viewer.update();
          } else {
            viewer = new Viewer(container, { toolbar: false, navbar: false });
          }
        } else if (viewer) {
          viewer.destroy();
          viewer = undefined;
        }
      };

      watch(
        () => router.route,
        () => {
          setTimeout(() => {
            setup();
          }, 1000);
        },
        { immediate: true, deep: true }
      );
    }
  },
};
