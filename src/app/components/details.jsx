'use client'

import { useEffect, useState } from "react"
import { fetchClientSpotifyApi } from "./api"
import styles from '../details/[id]/page.module.scss'
import Image from 'next/image';

const DetailsId = ({ token, id }) => {
    const [albums, setAlbums] = useState([]);
    const [tracks, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    console.log(token)
    console.log(id)

    useEffect(() => {
        const fetchDataAlbum = async () => {
            const album = await fetchClientSpotifyApi(`albums/${id}?market=fr`, token);
            setAlbums([album]);
        };
        fetchDataAlbum();
    }, [id, token]);

    useEffect(() => {
        const fetchDataArtist = async () => {
            const track = await fetchClientSpotifyApi(`tracks/${id}`, token)
            setArtists([track]);
            console.log(track)
        };
        fetchDataArtist();
    }, [id, token])

    useEffect(() => {
        const fetchDataPlaylist = async () => {
            const playlist = await fetchClientSpotifyApi(`items/${id}?market=fr`, token)
            setPlaylists([playlist]);
        };
        fetchDataPlaylist();
    }, [id, token])


    if (albums.length === 0 && tracks.length === 0 && playlists.length === 0) {
      return <p className={styles.loading}>Loading...</p>;
    }

    const itemAlbum = albums[0];
    const itemArtist = tracks[0];
    const itemPlaylist = playlists[0];

    return (
        <div className={styles.details}>

            {itemAlbum && (
              <div className={styles.block}>
               <div className={styles.left}>
               <Image src={itemAlbum.images[0].url} width={300} height={300} />
               <div className={styles.btn}>
                   <div className={styles.play}>
                       <Image src={"/play.png"} width={40} height={40} />
                   </div>
                   <div className={styles.favoris}>
                       <Image src={"/coeur-blanc.png"} width={40} height={40} />
                   </div>
                   <p className={styles.playlist}>Ajouter à la playlist</p>
               </div>
           </div>

           <div className={styles.right}>
               <h1 className={styles.h1}>{itemAlbum.name}</h1>
               <p className={styles.artiste}>{itemAlbum.artists[0].name}</p>
               <p className={styles.date}>{new Date(itemAlbum.release_date).toLocaleDateString()}</p>
           </div>
           </div>
            )}
                



                {itemArtist && (
                  <div className={styles.block}>
                    <div className={styles.left}>
                    <Image src={itemArtist.album.images[0].url} width={300} height={300} />
                    <div className={styles.btn}>
                        <div className={styles.play}>
                            <Image src={"/play.png"} width={40} height={40} />
                        </div>
                        <div className={styles.favoris}>
                            <Image src={"/coeur-blanc.png"} width={40} height={40} />
                        </div>
                        <p className={styles.playlist}>Ajouter à la playlist</p>
                    </div>
                </div>

                <div className={styles.right}>
                    <h1 className={styles.h1}>{itemArtist.name}</h1>
                    <p className={styles.artiste}>{itemArtist.artists[0].name}</p>
                    <p className={styles.date}>{new Date(itemArtist.album.release_date).toLocaleDateString()}</p>
                </div>
                  </div>
                ) }



                {itemPlaylist && (
                  <div className={styles.block}>
                    <div className={styles.left}>
                    <Image src={itemPlaylist.album.images[0].url} width={300} height={300} />
                    <div className={styles.btn}>
                        <div className={styles.play}>
                            <Image src={"/play.png"} width={40} height={40} />
                        </div>
                        <div className={styles.favoris}>
                            <Image src={"/coeur-blanc.png"} width={40} height={40} />
                        </div>
                        <p className={styles.playlist}>Ajouter à la playlist</p>
                    </div>
                </div>

                <div className={styles.right}>
                    <h1 className={styles.h1}>{itemPlaylist.name}</h1>
                    <p className={styles.artiste}>{itemPlaylist.artists[0].name}</p>
                    <p className={styles.date}>{new Date(itemPlaylist.album.release_date).toLocaleDateString()}</p>
                </div>
                  </div>
                ) }

          </div>
        
    )
}

export default DetailsId;


  

