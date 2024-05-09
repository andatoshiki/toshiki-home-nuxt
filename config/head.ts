import { NuxtOptionsHead } from '@nuxt/types/config/head'

/* Define constants */
const image = 'https://r2.toshiki.dev/image/toshiki-home-nuxt/8182c066f3e56974d3c5da0229e18450.jpg'
const description =
    'Young JavaScript developer from Arizona, interested in languages, gaming, and programming, trying to improve his JavaScript skills!'

const Head: NuxtOptionsHead = {
    title: 'toshiki.dev',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: description
        },
        /* Twitter */
        {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary'
        },
        {
            hid: 'twitter:site',
            name: 'twitter:site',
            content: '@andatoshiki'
        },
        {
            hid: 'twitter:creator',
            name: 'twitter:creator',
            content: '@andatoshiki'
        },
        {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'andatoshiki'
        },
        {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: description
        },
        {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: image
        },
        /* Open-Graph */
        {
            hid: 'og:type',
            name: 'og:type',
            content: 'website'
        },
        {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: 'toshiki.dev'
        },
        {
            hid: 'og:description',
            name: 'og:description',
            content: description
        },
        {
            hid: 'og:image',
            name: 'og:image',
            content: image
        },
        /* Others */
        {
            hid: 'theme-color',
            name: 'theme-color',
            content: '#171717'
        }
    ].map(i => {
        // @ts-ignore-next-line
        if (i.name && !i.property) i.property = i.name
        return i
    }),
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: 'https://toshiki.dev/assets/icons/favicon.ico'
        },
        {
            rel: 'search',
            type: 'application/opensearchdescription+xml',
            title: "'s Blog",
            href: 'https://toshiki.dev/opensearch.xml'
        },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }
    ],

    script: [
        {
            async: true,
            defer: true,
            'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`,
            src: `${process.env.UMAMI_ENDPOINT || ''}`
        }
    ]
}

export default Head
