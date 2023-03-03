import { SiteConfig } from 'shared/types';
import { pluginConfig } from './plugin-island/config';
import { pluginIndexHtml } from './plugin-island/indexHtml';
import { pluginRoutes } from './plugin-routes';
import pluginReact from '@vitejs/plugin-react';
import { pluginMdx } from './plugin-mdx';
import { Plugin } from 'vite';

export async function createVitePlugins(
  config: SiteConfig,
  restart?: () => Promise<void>
) {
  return [
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic'
    }),
    pluginConfig(config, restart),
    pluginRoutes({
      root: config.root
    }),
    await pluginMdx()
  ] as Plugin[];
}
