

import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'
import fetchSpotifyApi from './components/api'


export default async function Home() {
  const data_albums = await fetchSpotifyApi("browse/new-releases?country=fr&offset=0")
  const data_artistes = await fetchSpotifyApi("artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=fr")
  const topTracks = data_artistes.tracks;
  const data_playlist = await fetchSpotifyApi("playlists/3cEYpjA9oz9GiPac4AsH4n?market=fr")
  const playlistTracks = data_playlist.tracks.items;
  
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
          <Image src={album.images[0].url} width={200} height={200} alt="miniature" className='miniature' />
            <p className={styles.title}>{album.name}</p>
            <p className={styles.p}>{album.artists[0].name}</p>
            <p className={styles.date}>{new Date(album.release_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Découvrez les meilleurs morceaux de notre artiste vedette :</h2>
      <div className={styles.container}>
      {topTracks.map(track => (
          <div key={track.id} className={styles.block}>
            <Image src={track.album.images[0].url} width={200} height={200} alt="miniature" />
            <p className={styles.title}>{track.name}</p>
            <p className={styles.p}>{track.artists[0].name}</p>
            <p className={styles.date}>{new Date(track.album.release_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Tops playlists :</h2>
      <div className={styles.container}>
      {playlistTracks.map(track => (
          <div key={track.track.id} className={styles.block}>
            <Image src={track.track.album.images[0].url} width={200} height={200} alt="miniature" />
            <p className={styles.title}>{track.track.name}</p>
            <p className={styles.p}>{track.track.artists[0].name}</p>
            <p className={styles.date}>{new Date(track.track.album.release_date).toLocaleDateString()}</p>
          </div>
        ))}

      </div>

     <Footer />
    </div>
  )
}

