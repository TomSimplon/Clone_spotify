'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchClientSpotifyApi } from "./api"
import styles from '../search/page.module.scss'

const SearchList = ({ token }) => {
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const [page, setPage] = useState(1); 
    const itemsPerPage = 15; 
    const allItems = [...albums, ...artists, ...playlists];
    const currentItems = allItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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

    // Fonctions pour gérer le changement de page
    const previousPage = () => {
        setPage(prevPage => prevPage - 1);
    }

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div>
          <h2 className={styles.h2}>
            {allItems.length === 0 ? "Aucun résultat ne correspond à votre recherche" : `Résultats pour "${search}"`}
          </h2>
          <div className={styles.container}>
    
            {currentItems.map((item) => (
                item.images[0]?.url && (
                  <div key={item.id} className={styles.block}>
                      <img src={item.images[0].url} alt="miniature" />
                      <p className={styles.title}>{item.name}</p>
                      <p className={styles.p}>{item.artists ? item.artists[0].name : ''}</p>
                      <p className={styles.date}>{item.release_date ? new Date(item.release_date).toLocaleDateString() : ''}</p>
                  </div>
                )
            ))}
          </div>
        
          <div className={styles.pagination}>
                {page > 1 && <button className={styles.previous_page} onClick={previousPage}><strong>Précédent</strong></button>}
                <span className={styles.page_number}>Page {page}</span>
                {(allItems.length - page * itemsPerPage) > 0 && 
                <button className={styles.next_page} onClick={nextPage}><strong>Suivant</strong></button>}
          </div>
    </div>
  )
}

export default SearchList