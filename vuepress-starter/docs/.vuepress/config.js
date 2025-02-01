import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'NSCaptcha',
  description: 'A .NET library for easy CAPTCHA integration',

  theme: defaultTheme({
    logo: 'images/NCaptcha.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
