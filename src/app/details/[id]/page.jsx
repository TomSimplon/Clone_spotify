
import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'
import DetailsId from '@/app/components/details'
import { getSpotifyAuthToken } from '../../components/api'


export default async function Details({params}) {
   const token = await getSpotifyAuthToken()

  return (
    <div className='body'>
 
      <DetailsId token={token} id={params.id} />

    </div>
  );
}



