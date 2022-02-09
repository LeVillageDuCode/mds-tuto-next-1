import {useRouter} from 'next/router'

export default function comments() {
  const router = useRouter()
  const postId = router.query.postId

  return (
    <div>Tous les commentaires de l'article {postId}</div>
  )
}
