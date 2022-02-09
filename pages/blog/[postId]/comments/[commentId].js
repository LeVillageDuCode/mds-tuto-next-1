import {useRouter} from 'next/router'

export default function CommentDetail() {
  const router = useRouter()
  const commentId = router.query.commentId
  const postId = router.query.postId

  return (
    <div>Commentaire numéro {commentId} de l'article {postId}</div>
  )
}
