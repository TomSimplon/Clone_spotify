import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'


export default function Details() {
  return (
    <div className='body'>
      <Header />

      <div className={styles.details}>
        <div className={styles.block}>
        <div className={styles.left}>
        <Image src={"/meusique.jpg"} width={300} height={300}></Image>
          <div className={styles.btn}>
            <div className={styles.play}>
              <Image src={"/play.png"} width={40} height={40}></Image>
            </div>
            <div className={styles.favoris}>
               <Image src={"/coeur-blanc.png"} width={40} height={40}></Image>
            </div>
            <p className={styles.playlist}>Ajouter à la playlist</p>
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.h1}>Titre</h1>
          <p className={styles.artiste}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>
      </div> 
    </div>

     <Footer />
    </div>
  )
}