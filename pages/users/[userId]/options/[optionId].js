import {useRouter} from 'next/router'

export default function optionDetail() {
  const router = useRouter()

  //   const optionId = router.query.optionId
  //   const userId = router.query.userId
  // router.query : {optionId: 3, userId: 7}
  const {optionId, userId} = router.query

  return (
    <div>Option numéro {optionId} de l'utilisateur {userId}</div>
  )
}
