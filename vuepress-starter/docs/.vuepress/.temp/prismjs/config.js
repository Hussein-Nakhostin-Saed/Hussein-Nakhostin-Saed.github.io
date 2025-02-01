import "D:/Project/NSCaptcha.docs/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "D:/Project/NSCaptcha.docs/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "D:/Project/NSCaptcha.docs/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "D:/Project/NSCaptcha.docs/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "D:/Project/NSCaptcha.docs/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "D:/Project/NSCaptcha.docs/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
