import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'


export default function Search() {
  return (
      <div className='body'>
      <Header />

      <h2 className={styles.h2}>Résultats pour ""</h2>
      <div className={styles.container}>
        <div className={styles.block}>
          <Image src={"/meusique.jpg"} width={200} height={200}></Image>
          <p className={styles.title}>Titre</p>
          <p className={styles.p}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.block}>
          <Image src={"/meusique.jpg"} width={200} height={200}></Image>
          <p className={styles.title}>Titre</p>
          <p className={styles.p}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.block}>
          <Image src={"/meusique.jpg"} width={200} height={200}></Image>
          <p className={styles.title}>Titre</p>
          <p className={styles.p}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.block}>
          <Image src={"/meusique.jpg"} width={200} height={200}></Image>
          <p className={styles.title}>Titre</p>
          <p className={styles.p}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.block}>
          <Image src={"/meusique.jpg"} width={200} height={200}></Image>
          <p className={styles.title}>Titre</p>
          <p className={styles.p}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.block}>
          <Image src={"/meusique.jpg"} width={200} height={200}></Image>
          <p className={styles.title}>Titre</p>
          <p className={styles.p}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>
      </div>

      <div className={styles.pagination}>
           <button className={styles.previous_page}><strong>Précédent</strong></button>
           <span className={styles.page_number}>Page 1</span>
           <button className={styles.next_page}><strong>Suivant</strong></button>
      </div>

     <Footer />
    </div>

  )
}