import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Welcome from '../components/welcome';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="//tags.tiqcdn.com/utag/hsbc/hk-rbwm-gsp/dev/utag.sync.js" type="text/javascript" async=""></script>
        <script src="/static/tealium/utag_data.js" type="text/javascript" async=""></script>
        <script src="/static/tealium/utag.js" type="text/javascript" async=""></script>
      </Head>
      
      <main className={styles.main}>
        <Welcome />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            <p>
              <button id='btn_id' onClick={(e) => {
                e.preventDefault();
                console.log('cliked me');
                
                  TMS.trackEvent({
                    page_name: document.title,
                    page_url: document.URL
                  });
                
              }}> clicked</button>
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
