"use client"

import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import { useState } from "react";

export default function Search() {
  const [results, setResults] = useState([]); 
  console.log(results)

  return (
      <div className='body'>
      <Header setResults={setResults} /> 

      <h2 className={styles.h2}>Résultats pour ""</h2>
      <div className={styles.container}>
      {results.map((result) => (
        <div key={result.id} className={styles.block}>
          <Image src={result.images[0].url} width={200} height={200} classname="miniature"></Image>
          <p className={styles.title}>{result.name}</p>
          <p className={styles.p}>{result.artists[0].name}</p>
          <p className={styles.date}>{new Date(result.album.release_date).toLocaleDateString()}</p>
        </div>
      ))}
      </div>

      <div className={styles.pagination}>
           <button className={styles.previous_page}><strong>Précédent</strong></button>
           <span className={styles.page_number}>Page 1</span>
           <button className={styles.next_page}><strong>Suivant</strong></button>
      </div>

     <Footer />
    </div>

  )
}