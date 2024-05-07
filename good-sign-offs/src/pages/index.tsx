import RandomBlock from "@/components/RandomBlock";
import Head from 'next/head'

function Home() {
  return (
    <div>
      <Head>
        <title>Good Sign-Offs</title>
        <meta property="og:title" content="Good Sign-Offs" key="title" />
        <meta property="twitter:title" content="Good Sign-Offs"/>
        <meta name="theme-color" content="#e0f2fe" />
        <meta
          property="description"
          content="A mini experiment powered by are.na"
        />
        <meta
          property="og:description"
          content="A mini experiment powered by are.na"
        />
        <meta
          property="twitter:description"
          content="A mini experiment powered by are.na"
        />
        <meta property="og:url" content="https://good-sign-offs.tom.so" />
        <meta property="og:image" content="og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="og.png"/>
      </Head>
      <div className="bg-gradient-to-t from-sky-400 to-sky-100">
      <RandomBlock />
      </div>
    </div>
  );
};

export default Home;

