import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReclashButton } from '../components/ReclashButton'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CHESS RECLASH</title>
        <meta name="description" content="Lending Chess Reclash" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.home} id="home">
          <div className={styles.header}>
            <img className={styles.logo} src="/logo.svg"></img>
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#team">Team</Link>
              <Link href="#demo">Demo</Link>
              <Link href="#contacts">Contacts</Link>

          </div>
         
          <div className={styles.blueSide}>
            <div className={styles.social}>
                <Link href="vk.com">VK</Link>
                <Link href="tg.com">TELEGRAMM</Link>
                <Link href="youtube.com">YOUTUBE</Link>
            </div>
            <div className={styles.slogan}>
              <div className={styles.phrase}>
                <img src="/fire.svg"></img>
                <div>Future of play to earn games</div>
              </div>
              <p className={styles.phrase2}>
                  We will change <br/>
                  Your idea of <br/>
                  Chess Game <br/>
              </p>
              <ReclashButton class={styles.btn} color="red" onClick={()=>null}>EXPLORE MORE</ReclashButton>
              <div  className={styles.viewDemo}>
                <Link href="#demo">VIEW DEMO</Link>
              </div>
            </div>
          </div>
          <img className={styles.mockup} src="/mockup.png"></img>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutHeader}>
            OUR FEATURES
          </div>
          <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.icons}>
                  <img className={styles.icon} src="/chess.svg"></img>
                  <img className={styles.icon} src="/plus.svg"></img>
                  <img className={styles.icon}src="/card.svg"></img>
                </div>
                <div className={styles.cardHeader}>CHESS + TCG + RTS</div>
                <div className={styles.cardContent}>
                    We added elements of real-time strategy and NFT-based collectible card game to chess.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icons}>
                  <img className={styles.icon} src="/ton.svg"></img>
                  <img className={styles.icon} src="/plus.svg"></img>
                  <img className={styles.icon}src="/nft.svg"></img>
                </div>
                <div className={styles.cardHeader}>PLAY TO ENJOY & EARN</div>
                <div className={styles.cardContent}>
                The game is based on TON, you can bet in battles and win real money. You can also trade your own unique NFT characters.                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icons}>
                  <img className={styles.icon} src="/hearth.svg"></img>
                </div>
                <div className={styles.cardHeader}>COMMUNITY</div>
                <div className={styles.cardContent}>
                Our game has a great community and friendly developers. Here you can find your best friends.                </div>
              </div>
          </div>
        </div>
        <div className={styles.demo}>
          <div className={styles.aboutHeader}>
            DEMO
          </div>
          <img className={styles.demoGame} src="demo.png"></img>
        </div>
        <div className={styles.team}>
            <img src="/team.svg" className={styles.teamImg}></img>
            <div className={styles.teamContent}>
              <div className={styles.teamHeader}>OUR TEAM</div>
              <div className={styles.teamDescr}>
                Our team has been developing crypto projects for several years now. Chess Reclash is first of all a challenge for us. This is a big and ambitious, and also the most important project for us.
              </div>
            </div>
        </div>
        <div className={styles.contacts}> 
          <div className={styles.contactsCard}>
            <img className={styles.arrow} src="/arrow.svg"></img>
            <div className={styles.contactsHeaderWrapper}>
              <div className={styles.contactsHeader}>Join our community <br/>to learn even more!</div>
              <div  className={styles.shareButtonsWrapper}>
                <ReclashButton color="blue" class={styles.shareBtn} onClick={()=>null}>Telegramm</ReclashButton>
                <ReclashButton color="blue" class={styles.shareBtn} onClick={()=>null}>Twitter</ReclashButton>
              </div>
            </div>
            <img src="/arrow.svg" className={styles.arrow + " " + styles.reversed}></img>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerText}>
            POWERED BY
          </div>
          <img src="/ton.svg"></img>
          <div className={styles.footerText}>TON</div>
        </div>
      </main>
    </div>
  )
}

export default Home
