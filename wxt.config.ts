import { defineConfig } from 'wxt'

const hostPermissions = ['<all_urls>']

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],

  manifest: {
    name: '__MSG_extName__',
    description: '__MSG_extDescription__',
    default_locale: 'en',

    permissions: ['activeTab', 'notifications', 'commands', 'clipboardRead', 'clipboardWrite'],
    host_permissions: hostPermissions,
    action: {},
    commands: {
      'read-url-for-chatGPT': {
        suggested_key: {
          default: 'Ctrl+Shift+U',
          mac: 'Command+Shift+U',
        },
        description: 'Get ChatGPT-ready Markdown from any URL',
      },
    },
  },

  runner: {
    startUrls: ['https://www.bbc.com/news/articles/cdxe6lzvx9wo'],
  },

  hooks: {
    'build:manifestGenerated': (wxt, manifest) => {
      manifest.content_scripts ??= []
      manifest.content_scripts.push({
        js: ['content-scripts/content.js'],
        css: ['content-scripts/content.css'],
        matches: hostPermissions,
      })
    },
  },
})
