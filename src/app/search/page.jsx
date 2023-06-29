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

      <SearchList token={token} />

    </div>

  )
}