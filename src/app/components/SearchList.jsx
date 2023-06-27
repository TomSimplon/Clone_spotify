'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchClientSpotifyApi } from "./api"
import styles from '../search/page.module.scss'

const SearchList = ({ token }) => {
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const searchParams = useSearchParams()
    const search = searchParams.get('query');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchClientSpotifyApi(`search?q=${search}&type=album%2Cplaylist%2Cartist&market=fr&limit=25&offset=0`, token);
            setAlbums(data.albums.items);
            setArtists(data.artists.items);
            setPlaylists(data.playlists.items);
        };

        fetchData();
    }, [search, token]);

    return (
        <div className={styles.container}>
            { Array.isArray(albums) &&
            albums.map((album) => (
                album.images[0]?.url && (
                  <div key={album.id} className={styles.block}>
                      <img src={album.images[0].url} alt="miniature" />
                      <p className={styles.title}>{album.name}</p>
                      <p className={styles.p}>{album.artists[0].name}</p>
                      <p className={styles.date}>{new Date(album.release_date).toLocaleDateString()}</p>
                  </div>
                )
            ))}

            { Array.isArray(artists) &&
            artists.map((artist) => (
                artist.images[0]?.url && (
                  <div key={artist.id} className={styles.block}>
                      <img src={artist.images[0]?.url} alt="miniature" />
                      <p className={styles.title}>{artist.name}</p>
                  </div>
                )
            ))}

            { Array.isArray(playlists) &&
            playlists.map((playlist) => (
                playlist.images[0]?.url && (
                  <div key={playlist.id} className={styles.block}>
                      <img src={playlist.images[0]?.url} alt="miniature" />
                      <p className={styles.title}>{playlist.name}</p>
                  </div>
                )
            ))}
        </div>
    )
}

export default SearchList