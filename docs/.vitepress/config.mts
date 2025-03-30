import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Brook's-Blog",
  description: "Somethings new here :）",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recording', link: '/methodology' }
    ],
    

    sidebar: [
      { 
        text: 'Recording',
        items: [
          // { text: 'ToDoList', link: '/ToDoList' },
          { text: 'methodology', link: '/methodology' },
          { text: 'Politic', link: '/Politic' },
          { text: 'English', link: '/English' },
          { text: 'Math1', link: '/Math1' },
          { text: 'cs408', link: '/cs408' }
          // { text: 'Blockchain record', link: '/api-examples' },
          // { text: 'Blockchain record', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/caution17' }
    ]
  },
  outDir: './dist'
})
