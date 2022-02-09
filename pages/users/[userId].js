import {useRouter} from 'next/router'

export default function userDetails() {
    const router = useRouter()
    const userId = router.query.userId

  return (
    <div>
        <h1>Les infos de l'utilisateur {userId}</h1>
    </div>
  )
}
