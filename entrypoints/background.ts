export default defineBackground(() => {
  const readUrlForChatGPTCommandName = 'read-url-for-chatGPT'

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // 处理通知请求
    if (request.action === 'notify') {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon/48.png',
        title: request.title,
        message: request.message,
      })
    }
  })

  // 处理内容提取请求
  chrome.action.onClicked.addListener(async tab => {
    if (!tab.id) return

    chrome.tabs.sendMessage(tab.id, {
      action: 'extractContent',
    })
  })
  // 处理快捷键命令
  chrome.commands.onCommand.addListener(async command => {
    console.log('Command received:', command)
    if (command === readUrlForChatGPTCommandName) {
      try {
        // 获取当前标签页
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        if (!tab?.id) {
          throw new Error('No active tab found')
        }

        chrome.tabs.sendMessage(tab.id, {
          action: 'extractContent',
        })
      } catch (error) {
        console.error('Error:', error)

        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon/48.png',
          title: '',
          message: `No active tab found.`,
        })
      }
    }
  })

  chrome.runtime.onInstalled.addListener(async details => {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      // 检查快捷键注册状态
      const commands = await chrome.commands.getAll()
      const readUrlForChatGPTCommand = commands.find(
        cmd => cmd.name === readUrlForChatGPTCommandName
      )

      console.log(readUrlForChatGPTCommand)
      if (readUrlForChatGPTCommand) {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon/48.png',
          title: '',
          message: `You can now use the shortcut ${readUrlForChatGPTCommand.shortcut} to read the URL for chatGPT.`,
        })
      } else {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon/48.png',
          title: '',
          message:
            'You can click the extension icon to read the URL for chatGPT. or set a shortcut in the browser settings.',
        })
      }
    }
  })
})
