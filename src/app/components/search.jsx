"use client"

import {useState} from "react";
import styles from './header.module.scss';
import fetchSpotifyApi from "./api";

const SearchPage = () => {
    const [search, setSearch] = useState('')

    const handleSearchInput = (event) => {
        setSearch(event.target.value)
    }
    console.log(search)

    const handleSearchSubmit = async (event) => {
      event.preventDefault();
        try {
          const response = await fetchSpotifyApi(`search?q=${search}&type=album&market=fr&limit=25&offset=0`);
          // https://api.spotify.com/v1/search?q=pitbull&type=album&market=fr&limit=25&offset=0
          const data = await response.json();
          console.log(data)

          setResults(data.results);

        } catch (error) {
          console.error(error);
        }
      };

    return (
        <form className={styles.searchForm} action="/search" method="get">
          <input className={styles.inputText} name="query" type="text" placeholder="Rechercher..." onChange={handleSearchInput} />
          <button className={styles.submitButton} type="submit" onChange={() => handleSearchSubmit()}>
            <strong>OK</strong>
          </button>
        </form>
      );
    };

export default SearchPage