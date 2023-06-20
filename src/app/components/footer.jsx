import styles from './footer.module.css'
import Image from 'next/image'
 
export default function Footer() {
  return (
<div className={styles.footer}>
    <div className={styles.elements}>
      <div className={styles.text}>
        <h3>Société :</h3>
        <p>A propos</p>
        <p>Offres d'emploi</p>
        <p>For the record</p>
      </div>

      <div className={styles.text}>
        <h3>Communauté :</h3>
        <p>Espace artiste</p>
        <p>Visitez notre ferme (comprendra qui pourra)</p>
        <p>Campagnes publicitaires</p>
      </div>

      <div className={styles.text}>
        <h3>Liens utiles :</h3>
        <p>Assistance</p>
        <p>Application mobile</p>
        <p>Fournisseurs</p>
      </div>

      <div className={styles.social_media}>
      <h3>Rejoignez-nous à la fer... 
          Sur les réseaux sociaux :</h3>
      <div className={styles.icons}>
        <Image src={"/facebook.png"} width={30} height={30}></Image>
        <Image src={"/instagram.png"} width={30} height={30}></Image>
        <Image src={"/linkedin.png"} width={30} height={30}></Image>
        <Image src={"/youtube.png"} width={30} height={30}></Image>
      </div>
      </div>
    </div>

    <div className={styles.hrContainer}>
      <hr className={styles.hr}></hr>
    </div>

    <div className={styles.bottom}>
        <p>Mentions légales</p>
        <p>Centre de confidentialité</p>
        <p>Protection des données</p>
        <p>Paramètres des cookies</p>
        <p>Accessibilité</p>
    </div>
</div>
  )
}