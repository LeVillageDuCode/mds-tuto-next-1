import {useRouter} from 'next/router'
import Link from 'next/link'

export default function options() {
  const router = useRouter()
  const userId = router.query.userId

  return (
    <div>
      <h1>Toutes les options de l'utilisateur {userId}</h1>
      <Link href="/"><a>Retour à l'accueil</a></Link>
    </div>
  )
}
