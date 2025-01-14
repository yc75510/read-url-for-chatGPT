import { Readability } from '@mozilla/readability'
import TurndownService from 'turndown'

export interface ExtractedContent {
  title: string
  content: string
  markdown: string
  textContent: string
  length: number
  excerpt: string
  byline: string | null
  dir: string | null
  siteName: string | null
  lang: string | null
}

/**
 * 从网页提取主要内容
 * @param document 当前页面的 document 对象
 * @returns 提取的内容对象
 */
export function extractContent(document: Document): ExtractedContent {
  // 克隆 document 以避免修改原始 DOM
  const documentClone = document.cloneNode(true) as Document

  // 创建 Readability 实例
  const reader = new Readability(documentClone)

  // 解析内容
  const article = reader.parse()

  if (!article) {
    throw new Error('无法提取页面内容')
  }

  // 创建 Turndown 实例转换 HTML 到 Markdown
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
  })

  const markdown = turndownService.turndown(article.content)

  return {
    title: article.title,
    content: article.content,
    markdown,
    textContent: article.textContent,
    length: article.length,
    excerpt: article.excerpt,
    byline: article.byline,
    dir: article.dir,
    siteName: article.siteName,
    lang: article.lang,
  }
}

export const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const success = document.execCommand('copy')
      textArea.remove()
      return success
    } catch (fallbackError) {
      console.error('复制失败 (后备方案):', fallbackError)
      return false
    }
  }
}
