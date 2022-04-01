import { getWeek } from 'date-fns'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NKont</title>
      </Head>

      <main>
        <KontImage/>
      </main>
        
    </div>
  )
}

const KontImage = () => {
  const nthWeek = getWeek(new Date(), {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  });
  const weekString = nthWeek % 2 === 0 ? 'even' : 'odd';
  console.log(`týden: ${nthWeek} - ${weekString}`);

  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1240px',
      padding: '20px'
    }}>
      <Image src={`/map${weekString}.jpg`} width="1734px" height="1917px" alt="maka aktuálních kontejnerů" layout="responsive"
        
      />
    </div>
  )
}

export default Home
