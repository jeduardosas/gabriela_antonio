import React from 'react'
import '../styles/monograma.css'
const Monograma = () => {
  return (
    <div className='monograma'>
      <div className='monograma-img-div'>
        <img loading='lazy' src="/img/mono-grama.png" alt="img-monograma" />
      </div>
      <div className="monograma-text-div">
        <p>G</p>
        <p>&</p>
        <p>A</p>
      </div>

    </div>
  )
}

export default Monograma