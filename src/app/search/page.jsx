import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import SearchList from '../components/SearchList'
import { getSpotifyAuthToken } from '../components/api'

export default async function Search() {
  const token = await getSpotifyAuthToken()

  return (
      <div className='body'>
      <Header  /> 

      <h2 className={styles.h2}>Résultats pour ""</h2>
      <SearchList token={token} />
      

      <div className={styles.pagination}>
           <button className={styles.previous_page}><strong>Précédent</strong></button>
           <span className={styles.page_number}>Page 1</span>
           <button className={styles.next_page}><strong>Suivant</strong></button>
      </div>

     <Footer />
    </div>

  )
}