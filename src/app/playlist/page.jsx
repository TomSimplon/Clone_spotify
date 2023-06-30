'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react';


export default function Playlist() {

  const [playlists, setPlaylists] = useState([]);

  const audioRef = useRef(null);

  useEffect(() => {
    const loadedPlaylists = localStorage.getItem('playlists');
    setPlaylists(loadedPlaylists ? JSON.parse(loadedPlaylists) : []);
  }, []);

  const removeFromPlaylists = (playlistId) => {
    const updatedPlaylists = playlists.filter(playlist => playlist.id !== playlistId);
    setPlaylists(updatedPlaylists);
    localStorage.setItem('playlists', JSON.stringify(updatedPlaylists)); 
  };   

  const handlePlayClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <div className='body'>

     <audio styles={styles.audio} ref={audioRef} src="/assets/Sans_titre.mp3" preload="auto"></audio>

    <div className={styles.playlist}>
      <h1 className={styles.title}>Liste de vos playlist</h1>

      {playlists.map(playlist => (
          <div className={styles.contenu} key={playlist.id}>
            <div className={styles.block}>
              <div className={styles.left}>
                <Image src={playlist.image} width={200} height={200} />
              </div>

              <div className={styles.right}>
                <h1 className={styles.h1}>{playlist.name}</h1>
                <p className={styles.artiste}>{playlist.artist}</p>
                <p className={styles.date}>{new Date(playlist.date).toLocaleDateString()}</p>
              </div>

              <div className={styles.play}>
                <Image src={"/play.png"} width={40} height={40} onClick={handlePlayClick}/>
              </div>

              <div className={styles.btn}>
                <p className={styles.delete} onClick={() => removeFromPlaylists(playlist.id)}>Supprimer de vos playlists</p>
              </div>
            </div>
          </div>
        ))}

       
      </div>
    </div>


  )
}