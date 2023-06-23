import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import SearchPage from './search'
 
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
          <SearchPage />
          <a className={styles.a} href="">Se connecter</a>
		      <a className={styles.a} href="">S'inscrire</a>
        </div>
      </nav>
    </div>
  )
}