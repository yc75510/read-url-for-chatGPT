import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue', '@wxt-dev/unocss'],

  manifest: {
    permissions: ['activeTab', 'notifications', 'commands'],
    action: {},
    commands: {
      'read-url-for-chatGPT': {
        suggested_key: {
          default: 'Ctrl+Shift+U',
          mac: 'Command+Shift+U',
        },
        description: 'chatGPT did not really read URLs, but I can.',
      },
    },
  },

  runner: {
    startUrls: ['https://www.bbc.com/news/articles/cdxe6lzvx9wo'],
  },
})
