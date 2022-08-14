import React from 'react'
import { useRouter } from 'next/router'

const Variacion = ()=>{

  const router = useRouter()
  const resultado = router.query.id

  return(
    <>
    <h1>Hola soy pagina: {resultado}</h1>
    </>
  )
}

export default Variacion