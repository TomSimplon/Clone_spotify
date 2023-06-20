import styles from './header.module.css'
import Image from 'next/image'
 
export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.gauche}>
			 <Image src={"/meusique.jpg"} width={80} height={80}></Image>
          <div className={styles.onglets}>
            <a className={styles.a} href="/annonce">Accueil</a>
            <a className={styles.a} href="/login">Votre playlist</a>
            <a className={styles.a} href="/register">Favoris</a>
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