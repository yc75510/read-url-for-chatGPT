import { extractContent, copyText } from '../utils/content-extractor'

export default defineContentScript({
  matches: ['https://*/*'],

  main(ctx) {
    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
      // 创建内容提取器
      if (request.action === 'extractContent') {
        try {
          const content = extractContent(document)

          console.log(content)
          await copyText(content.markdown)

          chrome.runtime.sendMessage({
            action: 'notify',
            title: 'Read URL For chatGPT',
            message: 'The content has been copied to your clipboard.',
          })
        } catch (error) {
          chrome.runtime.sendMessage({
            action: 'notify',
            title: 'Read URL For chatGPT',
            message: 'Sorry! I could not read the URL.',
          })
        }
      }
      return true
    })
  },
})
