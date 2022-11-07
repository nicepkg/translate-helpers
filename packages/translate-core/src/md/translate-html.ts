import type { GoogleTranslateOptions } from '../core'
import { translate } from '../core'
import { createReplacer } from './replacer'

/**
 * 翻译 html 内容配置
 */
interface TranslateHtmlOptions extends GoogleTranslateOptions {

  /**
   * html 内容
   */
  htmlContent: string
}

/**
 * 翻译 html 内容
 * @param options 配置
 */
export async function translateHtml(options: TranslateHtmlOptions): Promise<string> {
  const { htmlContent, sourceLang, targetLang, useSystemProxy } = options

  const translateFn = (str: string) => {
    return translate(str, {
      sourceLang,
      targetLang,
      useSystemProxy,
    })
  }

  const htmlTextRegExp = /(<[\w\W]+?>\s*)([\w\W]*?)(?=\s*<[\w\W]+?>)/g
  const htmlTranslateFn = createReplacer(htmlContent, htmlTextRegExp, (matchResult, translateResult) => {
    const forTranslateContent = matchResult[2] || ''
    const forReturnReplacerContent = `${matchResult[1]}${translateResult}`
    return [forTranslateContent, forReturnReplacerContent]
  }, translateFn)

  return htmlTranslateFn()
}
