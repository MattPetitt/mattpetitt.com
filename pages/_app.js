import NextApp from 'next/app'
import Head from 'next/head'
import { CacheProvider } from '@emotion/core'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

import { globalStyles } from 'shared/styles'

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props
        return (
            <CacheProvider value={cache}>
                {globalStyles}
                <Head>
                    <title>Matt Petitt</title>
                    <meta name="description" content="UX Developer" />
                    <link
                        rel="shortcut icon"
                        href="/favicon.png?v=1"
                        type="image/png"
                    ></link>
                </Head>
                <Component {...pageProps} />
            </CacheProvider>
        )
    }
}
