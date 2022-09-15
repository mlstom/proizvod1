import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import slika from '../slike/Slika1.png'
import Router from 'next/router'

export default function Home() {
  const [email, setemail] = useState(false)
  const [mail, setmail] = useState('')
  const handle = async () => {
    await fetch('/api/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail })
    })
    Router.push('https://www.digistore24.com/redir/431478/mlstomic/')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Cleaner Smile Teeth Whitening Kit</title>
        <meta name="description" content="Mozegospode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {email &&
        <div className={styles.absolute}>
          <div className={styles.contmail}>
            <p>Just to be sure that you are human, enter your mail below</p>
            <input type='email' placeholder='exaple@inkrist.net' value={mail} onChange={(e) => setmail(e.target.value)} />
            <button type='button'  onClick={() => handle()}>Start watching now!!! </button>
          </div>
        </div>
      }
      <header className={styles.header}>
        <p >Cleaner Smile Teeth Whitening Kit</p>
        <a>Home</a>
      </header>
      <main className={styles.main}>
        <h1  >TRY CLEANER SMILE NOW</h1>
        <div  onClick={(e) => setemail(true)}>
          <Image src={slika} alt='pusi kurac' />
        </div>
        <h2 >Don't miss out on this incredible solution.</h2>
        <p>
          Cleaner Smile was created to help people struggling with tooth stains
          discoloration to enjoy the confidence of a beautiful, bright smile.
          Solutions to whitening are often expensive and inconvenient. Cleaner Smile
          offers an alternative: an easy-to-use system that restores whiteness to
          help you feel confident and live your best life.
          Click the button below now to pick out your Cleaner Smile system and start
          smiling bigger!
        </p>
        <p>If you want more about this item just <button type='button'  onClick={(e) => setemail(true)}>click here to watch video about it</button></p>
      </main>
    </div>
  )
}
