import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

 
export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.gauche}>
			 <Image src={"/meusique.jpg"} width={80} height={80}></Image>
          <div className={styles.onglets}>
            <a className={styles.a} href="/">Accueil</a>
            <a className={styles.a} href="/playlist">Votre playlist</a>
            <a className={styles.a} href="/favoris">Favoris</a>
          </div>
        </div>
        <div className={styles.droite}>
          <form className={styles.searchForm} action="/search" method="get">
            <input className={styles.inputText} name="query" type="text" placeholder="Rechercher..." />
            <button className={styles.submitButton} type="submit">
              <strong>OK</strong>
            </button>
          </form>
          <a className={styles.a} href="/user">Se connecter</a>
		      <a className={styles.a} href="/user">S'inscrire</a>
        </div>
      </nav>
    </div>
  )
}