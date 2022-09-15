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
            <input style={{ padding: '5px 10px' }} type='email' placeholder='exaple@inkrist.net' value={mail} onChange={(e) => setmail(e.target.value)} />
            <a onClick={() => handle()} style={{ color: '#fff', backgroundColor: '#6c63ff', padding: '5px 10px', borderRadius: '10px', marginTop: '20px', cursor: 'pointer' }}>Start watching now!!! </a>
          </div>
        </div>
      }
      <header className={styles.header}>
        <p style={{ fontSize: '20px' }}>Cleaner Smile Teeth Whitening Kit</p>
        <p>Home</p>
      </header>
      <main className={styles.main}>
        <h1 style={{ color: '#6c63ff' }} >TRY CLEANER SMILE NOW</h1>
        <div style={{cursor:'pointer'}} onClick={(e) => setemail(true)}>
          <Image src={slika} alt='pusi kurac' />
        </div>
        <h2 style={{ color: '#6c63ff' }}>Don't miss out on this incredible solution.</h2>
        <p>
          Cleaner Smile was created to help people struggling with tooth stains
          discoloration to enjoy the confidence of a beautiful, bright smile.
          Solutions to whitening are often expensive and inconvenient. Cleaner Smile
          offers an alternative: an easy-to-use system that restores whiteness to
          help you feel confident and live your best life.
          Click the button below now to pick out your Cleaner Smile system and start
          smiling bigger!
        </p>
        <p>If you want more about this item just <span style={{color:'#6c63ff',textDecoration:'underline', cursor:'pointer'}} onClick={(e) => setemail(true)}>click here to watch video about it</span></p>
      </main>
    </div>
  )
}
