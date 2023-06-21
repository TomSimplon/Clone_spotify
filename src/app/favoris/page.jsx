import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'


export default function Favoris() {
  return (
    <div className='body'>
      <Header />

    <div className={styles.favoris}>
      <h1 className={styles.title}>Liste de vos favoris</h1>

      <div className={styles.contenu}>
       <div className={styles.block}>
         <div className={styles.left}>
         <Image src={"/meusique.jpg"} width={200} height={200}></Image>
         </div>

        <div className={styles.right}>
          <h1 className={styles.h1}>Titre</h1>
          <p className={styles.artiste}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.play}>
              <Image src={"/play.png"} width={40} height={40}></Image>
        </div>

        <div className={styles.btn}>
            <p className={styles.delete}>Supprimer de vos favoris</p>
        </div>

       </div> 
      </div>

      <div className={styles.contenu}>
       <div className={styles.block}>
         <div className={styles.left}>
         <Image src={"/meusique.jpg"} width={200} height={200}></Image>
         </div>

        <div className={styles.right}>
          <h1 className={styles.h1}>Titre</h1>
          <p className={styles.artiste}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.play}>
              <Image src={"/play.png"} width={40} height={40}></Image>
        </div>

        <div className={styles.btn}>
            <p className={styles.delete}>Supprimer de vos favoris</p>
        </div>

       </div> 
      </div>

      <div className={styles.contenu}>
       <div className={styles.block}>
         <div className={styles.left}>
         <Image src={"/meusique.jpg"} width={200} height={200}></Image>
         </div>

        <div className={styles.right}>
          <h1 className={styles.h1}>Titre</h1>
          <p className={styles.artiste}>Artiste</p>
          <p className={styles.date}>Date</p>
        </div>

        <div className={styles.play}>
              <Image src={"/play.png"} width={40} height={40}></Image>
        </div>

        <div className={styles.btn}>
            <p className={styles.delete}>Supprimer de vos favoris</p>
        </div>

       </div> 
      </div>
    </div>

     <Footer />
    </div>
  )
}