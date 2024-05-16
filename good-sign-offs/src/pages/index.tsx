import RandomBlock from "@/components/RandomBlock";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>Good Sign-Offs</title>
        <meta property="og:title" content="Good Sign-Offs" key="title" />
        <meta property="twitter:title" content="Good Sign-Offs" />
        <meta name="theme-color" content="#FFEDD5" />
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
        <meta property="og:url" content="https://work.tom.so/good-sign-offs" />
        <meta property="og:image" content="/good-sign-offs/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/good-sign-offs/og.png" />
      </Head>
      <div className="bg-orange-100">
        <RandomBlock />
      </div>
    </div>
  );
}

export default Home;
