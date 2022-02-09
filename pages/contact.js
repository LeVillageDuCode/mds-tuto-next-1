import styles from '../styles/Contact.module.css'
import Head from 'next/head'

export default function contact() {
  return (
    <div>
      <Head>
        <title>Contactez-moi pour plus d'infos!</title>
        <meta name="description" content="Contactez-moi, c'est cool..." />
      </Head>
      <h1 className={styles.maintitle}>Me contacter</h1>
      <p>Lorem ipsum dolor sit amet.</p>

      <form>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />

          <button className={styles.btnsubmit}
            type="submit">Envoyer</button>
      </form>
    </div>
  )
}
