import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LocaleProvider } from '@/contexts/LocaleContext';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Head>
        <title>AI 卡片生成器</title>
        <meta name="description" content="使用AI技术，轻松创建适合任何场合的精美卡片" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </LocaleProvider>
  );
} 