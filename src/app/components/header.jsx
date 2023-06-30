'use client'

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './header.module.scss';
import Image from 'next/image';
import SearchPage from './search';
import { getSpotifyAuthToken } from './api';

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getSpotifyAuthToken();
      setToken(fetchedToken);
    };
    
    fetchToken();
  }, []);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.gauche}>
          <Image src={"/meusique.jpg"} width={80} height={80} alt="minitature" onClick={openVideo} />
          {showVideo && ReactDOM.createPortal(
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeVideo}>&times;</span>
                <video className={styles.videoPlayer} src="/assets/madara.mp4" autoPlay controls />
              </div>
            </div>,
            document.body
          )}
          <div className={styles.onglets}>
            <a className={styles.a} href="/">Accueil</a>
            <a className={styles.a} href="/playlist">Votre playlist</a>
            <a className={styles.a} href="/favoris">Favoris</a>
          </div>
        </div>
        <div className={styles.droite}>
          <SearchPage token={token} />
          <a className={styles.a} href="">Se connecter</a>
          <a className={styles.a} href="">S'inscrire</a>
        </div>
      </nav>
    </div>
  )
}