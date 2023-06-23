"use client"

import {useState} from "react";
import styles from './header.module.scss';
import fetchSpotifyApi from "./api";

const SearchPage = () => {
    const [search, setSearch] = useState('')

    const handleSearchInput = (event) => {
        setSearch(event.target.value)
    }

    const handleSearchSubmit = async () => {
        try {
          const response = await fetchSpotifyApi(`search?type=&market=fr&q=${search}&limit=25&offset=0`);
          const data = await response.json();
          setResults(data.results);
          console.log(data)
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <form className={styles.searchForm} action="/search" method="get">
          <input className={styles.inputText} name="query" type="text" placeholder="Rechercher..." onChange={handleSearchInput} />
          <button className={styles.submitButton} type="submit" onChange={handleSearchSubmit}>
            <strong>OK</strong>
          </button>
        </form>
      );
    };

export default SearchPage