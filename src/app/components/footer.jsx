import styles from './footer.module.scss'
import Image from 'next/image'
 
export default function Footer() {
  return (
<div className={styles.footer}>
    <div className={styles.elements}>
      <div className={styles.text}>
        <h3 className={styles.h3}>Société :</h3>
        <p className={styles.p}>A propos</p>
        <p className={styles.p}>Offres d'emploi</p>
        <p className={styles.p}>For the record</p>
      </div>

      <div className={styles.text}>
        <h3 className={styles.h3}>Communauté :</h3>
        <p className={styles.p}>Espace artiste</p>
        <p className={styles.p}>Visitez notre ferme (comprendra qui pourra)</p>
        <p className={styles.p}>Campagnes publicitaires</p>
      </div>

      <div className={styles.text}>
        <h3 className={styles.h3}>Liens utiles :</h3>
        <p className={styles.p}>Assistance</p>
        <p className={styles.p}>Application mobile</p>
        <p className={styles.p}>Fournisseurs</p>
      </div>

      <div className={styles.social_media}>
      <h3 className={styles.h3}>Rejoignez-nous à la fer... 
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
        <p className={styles.p}>Mentions légales</p>
        <p className={styles.p}>Centre de confidentialité</p>
        <p className={styles.p}>Protection des données</p>
        <p className={styles.p}>Paramètres des cookies</p>
        <p className={styles.p}>Accessibilité</p>
    </div>
</div>
  )
}