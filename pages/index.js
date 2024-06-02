import Head from 'next/head';
import BibleVerse from '../components/BibleVerse';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bible App</title>
        <meta name="description" content="A simple Bible app made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BibleVerse />
      </main>
    </div>
  );
}
