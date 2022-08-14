import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Home = () => {

  const [productos, setProductos] = useState([])

  const getProducts = async () => {
    try {
      const repose = await axios.get('https://fakestoreapi.com/products')
      setProductos(repose.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Navbar />
      <div className='contenedorCards'>
        {productos.map((item, index) =>
          <Cards
            key={index}
            titulo={item.title}
            precio={item.price}
            descripcion={item.description}
            imagen={item.image}
            categoria={item.category}
            id={item.id}

          />)}
      </div>
    </>
  )
}

export default Home