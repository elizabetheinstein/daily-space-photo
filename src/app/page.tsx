import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const date = new Date().toLocaleString()

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={inter.className}>Today is {date}</p>
      </div>

      <div className={styles.grid}>
        <p>Photo of space</p>
        <Image
          src="/placeholder"
          alt="placeholder"
          width={40}
          height={31}
          priority
        />
      </div>
    </main>
  )
}
