

import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'
import fetchSpotifyApi from './components/api'


export default async function Home() {
  const data_albums = await fetchSpotifyApi("browse/new-releases?country=fr&offset=0")
  const data_artistes = await fetchSpotifyApi("browse/new-releases?country=fr&offset=0")
  
  return (
    <div className='body'>
      <Header />
      <div className={styles.bannière}>
        <h1 className={styles.h1}>Bienvenue sur "Meusique", le site où on fait la fête en rythme ! Préparez-vous à une expérience musicale à faire "moo-ve" votre corps et à vous faire "meuh-rrir" de plaisir !</h1>
      </div>

      <h2 className={styles.h2}>Découvrez nos nouveaux albums :</h2>
      <div className={styles.container}>
      {data_albums.albums.items.map(album => (
          <div key={album.id} className={styles.block}>
          <Image src={album.images[0].url} width={200} height={200} alt="miniature" />
            <p className={styles.title}>{album.name}</p>
            <p className={styles.p}>{album.artists[0].name}</p>
            <p className={styles.date}>{new Date(album.release_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Découvrez les meilleurs morceaux de nos artistes :</h2>
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

