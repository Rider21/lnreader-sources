require('module-alias/register');

import * as fs from 'fs';
import { languages } from '@libs/languages';
import * as path from 'path';
import { Plugin } from '@typings/plugin';
import { minify } from './terser';

const root = path.dirname(__dirname);
const outRoot = path.join(root, '..');
const { execSync } = require('child_process');
const REMOTE = execSync('git remote get-url origin')
  .toString()
  .replace(/[\s\n]/g, '');
const CURRENT_BRANCH = execSync('git branch --show-current')
  .toString()
  .replace(/[\s\n]/g, '');
const matched = REMOTE.match(/([^:/]+?)\/([^/.]+)(\.git)?$/);
if (!matched) throw Error('Cant parse git url');
const USERNAME = matched[1];
const REPO = matched[2];
const USER_CONTENT_LINK = `https://raw.githubusercontent.com/${USERNAME}/${REPO}/${CURRENT_BRANCH}`;

const ICON_LINK = `${USER_CONTENT_LINK}/icons`;
const PLUGIN_LINK = `${USER_CONTENT_LINK}/.js/plugins`;

interface plugin {
  id: string;
  name: string;
  site: string;
  lang: string;
  version: string;
  url: string;
  iconUrl: string;
}

if (!fs.existsSync(path.join(outRoot, '.dist'))) {
  fs.mkdirSync(path.join(outRoot, '.dist'));
}

const json: { [key: string]: plugin[] } = {};
const jsonPath = path.join(outRoot, '.dist', 'plugins.json');
const jsonMinPath = path.join(outRoot, '.dist', 'plugins.min.json');

const loadingPlugin = async (lang: string, plugin: string): Promise<plugin> => {
  return new Promise(async (resolve, reject) => {
    try {
      await minify(path.join(root, 'plugins', lang.toLowerCase(), plugin));

      const instance: Plugin.PluginBase = require(
        `../plugins/${lang.toLowerCase()}/${plugin.split('.')[0]}`,
      ).default;

      const { id, site, version, icon } = instance;
      const name = instance.name.replace(/\[.*\]/, '');
      const url = `${PLUGIN_LINK}/${lang.toLowerCase()}/${plugin}`;
      const iconUrl =
        icon && fs.existsSync(path.join(root, '..', 'icons', icon))
          ? `${ICON_LINK}/${icon}`
          : `https://www.google.com/s2/favicons?domain=${site}&sz=96`;

      console.log(name, '✅');
      resolve({ id, name, site, lang, version, url, iconUrl } as plugin);
    } catch (err) {
      console.log(plugin + '❌', err);
      reject(plugin);
    }
  });
};

(async () => {
  const plugins: Promise<plugin>[] = [];
  const broken: string[] = [];
  for (const language in languages) {
    json[language] = [];
    const langPath = path.join(root, 'plugins', language.toLowerCase());
    if (fs.existsSync(langPath)) {
      const dir = await fs.promises.readdir(langPath);
      dir.forEach(plugin => {
        if (plugin.startsWith('.')) return;
        plugins.push(loadingPlugin(language, plugin));
      });
    }
    const langPathAll = path.join(
      root,
      '..',
      'plugins',
      language.toLowerCase(),
    );
    if (fs.existsSync(langPathAll)) {
      const dir = await fs.promises.readdir(langPathAll);
      dir.forEach(plugin => {
        if (plugin.endsWith('.broken.ts'))
          broken.push(plugin.replace('.broken.ts', '') + '❌');
      });
    }
  }
  console.log('Готово', plugins);
  const pluginList: any[] = (await Promise.allSettled(plugins))
    .filter(plugin => {
      if (plugin?.status == 'fulfilled') {
        return plugin?.value?.id;
      } else {
        console.log(plugin.reason, '❌');
      }
    });
  console.log(broken.join('\n'));

  pluginList
    .sort((a, b): any => a.value.name.localeCompare(b.value.name))
    .forEach(plugin => json[plugin.value.lang].push(plugin.value));

  fs.promises.writeFile(jsonMinPath, JSON.stringify(json));
  fs.promises.writeFile(jsonPath, JSON.stringify(json, null, '\t'));

  fetch(`https://img.shields.io/badge/Plugins-${pluginList.length}-blue`)
    .then(res => res.text())
    .then(data => {
      fs.writeFileSync('total.svg', data, { encoding: 'utf-8' });
    })
    .catch(error => {
      fs.writeFileSync('total.svg', '', { encoding: 'utf-8' });
    });

  console.log(jsonPath);
  console.log('Done ✅');
})();
