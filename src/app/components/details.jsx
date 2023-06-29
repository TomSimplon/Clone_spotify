'use client'

import { useEffect, useState } from "react"
import { fetchClientSpotifyApi } from "./api"
import styles from '../details/[id]/page.module.scss'
import Image from 'next/image';
import Link from "next/link";

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

    const addToFavoritesAlbum = (itemAlbum) => {
      let favorites = localStorage.getItem('favorites');
      favorites = favorites ? JSON.parse(favorites) : [];
          
      const newFavoriteAlbum = {
        id: itemAlbum.id,
        name: itemAlbum.name,
        image: itemAlbum.images[0].url,
        artist: itemAlbum.artists[0].name,
        date: itemAlbum.release_date
      };
    
      if (!favorites.some(favorite => favorite.id === newFavoriteAlbum.id)) {
        favorites.push(newFavoriteAlbum);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    };
        
    const addToFavoritesArtist = (itemArtist) => {
      let favorites = localStorage.getItem('favorites');
      favorites = favorites ? JSON.parse(favorites) : [];
    
      const newFavoriteArtist = {
        id: itemArtist.id,
        name: itemArtist.name,
        image: itemArtist.album.images[0].url,
        artist: itemArtist.artists[0].name,
        date: itemArtist.album.release_date
      };
          
      if (!favorites.some(favorite => favorite.id === newFavoriteArtist.id)) {
        favorites.push(newFavoriteArtist);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    };
    
    const addToFavoritesPlaylist = (itemPlaylist) => {
      let favorites = localStorage.getItem('favorites');
      favorites = favorites ? JSON.parse(favorites) : [];
    
      const newFavoritePlaylist = {
        id: itemPlaylist.id,
        name: itemPlaylist.name,
        image: itemPlaylist.album.images[0].url,
        artist: itemPlaylist.artists[0].name,
        date: itemPlaylist.album.release_date
      };
          
      if (!favorites.some(favorite => favorite.id === newFavoritePlaylist.id)) {
        favorites.push(newFavoritePlaylist);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    };

    const addToPlaylistAlbum = (itemAlbum) => {
      let playlists = localStorage.getItem('playlists');
      playlists = playlists ? JSON.parse(playlists) : [];
          
      const newPlaylistAlbum = {
        id: itemAlbum.id,
        name: itemAlbum.name,
        image: itemAlbum.images[0].url,
        artist: itemAlbum.artists[0].name,
        date: itemAlbum.release_date
      };
    
      if (!playlists.some(playlist => playlist.id === newPlaylistAlbum.id)) {
        playlists.push(newPlaylistAlbum);
        localStorage.setItem('playlists', JSON.stringify(playlists));
      }
    };
        
    const addToPlaylistsArtist = (itemArtist) => {
      let playlists = localStorage.getItem('playlists');
      playlists = playlists ? JSON.parse(playlists) : [];
    
      const newPlaylistArtist = {
        id: itemArtist.id,
        name: itemArtist.name,
        image: itemArtist.album.images[0].url,
        artist: itemArtist.artists[0].name,
        date: itemArtist.album.release_date
      };
          
      if (!playlists.some(playlist => playlist.id === newPlaylistArtist.id)) {
        playlists.push(newPlaylistArtist);
        localStorage.setItem('playlists', JSON.stringify(playlists));
      }
    };
    
    const addToPlaylistsPlaylist = (itemPlaylist) => {
      let playlists = localStorage.getItem('playlists');
      playlists = playlists ? JSON.parse(playlists) : [];
    
      const newPlaylistinPlaylist = {
        id: itemPlaylist.id,
        name: itemPlaylist.name,
        image: itemPlaylist.album.images[0].url,
        artist: itemPlaylist.artists[0].name,
        date: itemPlaylist.album.release_date
      };
          
      if (!playlists.some(playlist => playlist.id === newPlaylistinPlaylist.id)) {
        playlists.push(newPlaylistinPlaylist);
        localStorage.setItem('playlists', JSON.stringify(playlists));
      }
    };


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
                    <Link href={`/favoris`}>
                      <Image src={"/coeur-blanc.png"} width={40} height={40} onClick={() => addToFavoritesAlbum(itemAlbum)}/>
                    </Link>
                   </div>
                   <Link href={`/playlist`}>
                     <p className={styles.playlist} onClick={() => addToPlaylistAlbum(itemAlbum)}>Ajouter à la playlist</p>
                   </Link>
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
                         <Link href={`/favoris`}>
                           <Image src={"/coeur-blanc.png"} width={40} height={40} onClick={() => addToFavoritesArtist(itemArtist)}/>
                         </Link>
                        </div>
                        <Link href={`/playlist`}>
                          <p className={styles.playlist} onClick={() => addToPlaylistsArtist(itemArtist)}>Ajouter à la playlist</p>
                        </Link>
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
                          <Link href={`/favoris`}>
                            <Image src={"/coeur-blanc.png"} width={40} height={40} onClick={() => addToFavoritesPlaylist(itemPlaylist)}/>
                          </Link>                          
                        </div>
                        <Link href={`/playlist`}>
                          <p className={styles.playlist} onClick={() => addToPlaylistsPlaylist(itemPlaylist)}>Ajouter à la playlist</p>
                        </Link>
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


  

