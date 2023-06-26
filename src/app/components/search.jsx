"use client"

import {useState} from "react";
import styles from './header.module.scss';

const SearchPage = (token) => {
    
    return (
        <form className={styles.searchForm} action="/search" method="get">
          <input className={styles.inputText} name="query" type="text" placeholder="Rechercher..."  />
          <button className={styles.submitButton} type="submit" >
            <strong>OK</strong>
          </button>
        </form>
      );
    };

export default SearchPage