import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Link from 'next/link'
import fetchSpotifyApi from './components/api'


export default function Home() {
  return (
    <div className='body'>
      <Header />
      <div className={styles.bannière}>
        <h1 className={styles.h1}>Bienvenue sur "Meusique", le site où on fait la fête en rythme ! Préparez-vous à une expérience musicale à faire "moo-ve" votre corps et à vous faire "meuh-rrir" de plaisir !</h1>
      </div>

      <h2 className={styles.h2}>Hits du moment :</h2>
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

      <h2 className={styles.h2}>Tops artistes :</h2>
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

      <h2 className={styles.h2}>Tops playlists :</h2>
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

     <Footer />
    </div>
  )
}

