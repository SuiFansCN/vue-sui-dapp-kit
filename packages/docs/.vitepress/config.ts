import { defineConfig } from 'vitepress'
import { zh } from './locales/zh_Hans';
import { en } from './locales/en_US';
import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        plugins: [
            AutoSidebar(),
            AutoImport({
                imports: [
                    'vue',
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar'
                        ]
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            })
        ]
    },
    lang: 'zh-Hans',
    cleanUrls: true,
    metaChunk: true,
    title: "Suiue",
    description: "a dapp-kit for sui on vue",
    locales: {
        root: {
            label: '简体中文',
            ...zh
        },
        en_US: {
            label: 'English',
            ...en
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        // i18nRouting: true,
        // search: {
        //     provider: "local"
        // },
        footer: {
            copyright: `Made with 💜 by @suifans`
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/SuiFansCN/suiue' }
        ]
    }
})