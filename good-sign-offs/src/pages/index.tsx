import RandomBlock from "@/components/RandomBlock";
import Head from 'next/head'

function Home() {
  return (
    <div>
      <Head>
        <title>Good Sign-Offs</title>
        <meta property="og:title" content="Good Sign-Offs" key="title" />
      </Head>
      <RandomBlock/>
    </div>
  )
};

export default Home;

