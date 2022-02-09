import styles from '../styles/Contact.module.css'

export default function contact() {
  return (
    <div>
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
