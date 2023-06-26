'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchClientSpotifyApi } from "./api"
import styles from '../search/page.module.scss'

const SearchList = (token) => {
    const [results, setResults] = useState();
    const searchParams = useSearchParams()
    const search = searchParams.get('query')

    useEffect(() => {
    const fetch = async () => {
        const data = await fetchClientSpotifyApi(`search?q=${search}&type=album%2Cplaylist%2Cartist&market=fr&limit=25&offset=0`, token.token)
        console.log(data)
    }
    fetch()

    }, [search])
    console.log(results)

    return (
        <div className={styles.container}>
      {/* {results.map((result) => (
        <div key={result.id} className={styles.block}>
          <Image src={result.images[0].url} width={200} height={200} className="miniature" alt="miniature"></Image>
          <p className={styles.title}>{result.name}</p>
          <p className={styles.p}>{result.artists[0].name}</p>
          <p className={styles.date}>{new Date(result.release_date).toLocaleDateString()}</p>
        </div>
      ))} */}
      </div>
    )
}

export default SearchList