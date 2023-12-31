'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react';


export default function Favoris() {

  const [favorites, setFavorites] = useState([]);

  const audioRef = useRef(null);

  useEffect(() => {
    const loadedFavorites = localStorage.getItem('favorites');
    setFavorites(loadedFavorites ? JSON.parse(loadedFavorites) : []);
  }, []);

  const removeFromFavorites = (favoriteId) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== favoriteId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); 
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

      <div className={styles.favoris}>
        <h1 className={styles.title}>Liste de vos favoris</h1>

        {favorites.map(favorite => (
          <div className={styles.contenu} key={favorite.id}>
            <div className={styles.block}>
              <div className={styles.left}>
                <Image src={favorite.image} width={200} height={200} />
              </div>

              <div className={styles.right}>
                <h1 className={styles.h1}>{favorite.name}</h1>
                <p className={styles.artiste}>{favorite.artist}</p>
                <p className={styles.date}>{new Date(favorite.date).toLocaleDateString()}</p>
              </div>

              <div className={styles.play}>
                <Image src={"/play.png"} width={40} height={40} onClick={handlePlayClick}/>
              </div>

              <div className={styles.btn}>
                <p className={styles.delete} onClick={() => removeFromFavorites(favorite.id)}>Supprimer de vos favoris</p>
              </div>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  )
}
