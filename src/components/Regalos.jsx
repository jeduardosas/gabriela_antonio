import React from 'react'
import useScrollVisible from '../hooks/useScrollVisible'
import '../styles/regalos.css'

const Regalos = () => {
  const sobreContentVisible = useScrollVisible('sobreContent')
  const barraContentVisible = useScrollVisible('barraContent')
  return (
    <div className='regalos'>
      <h2 className='regalos-title'>¿No sabes qué Regalarnos?</h2>
      <div className="regalos-cards">
        {/* <div id='sobreContent' className={`regalos-card sombra ${sobreContentVisible && 'animate__animated animate__zoomIn'}`}>
          <h3 className='regalos-card-title'>Tiulo</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className ="icon icon-tabler icon-tabler-mail" width="60" height="60" viewBox="0 0 24 24" strokeWidth="0.5" stroke="#bea77b" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </div>
          <div  className='regalos-card-content regalo-card-sobre'>
            <p>
              Nuestro mejor regalo es compartir este gran día, 
            </p>
            <p>si deseas obsequiearnos algo,</p>
            <p>
              podemos sugerir la opcion.
            </p>
          </div>
        </div> */}

        <div id='barraContent' className={`regalos-card sombra ${barraContentVisible && 'animate__animated animate__zoomIn'}`}>
          <div style={{marginBottom:'20px'}}  className='regalos-card-content regalo-card-sobre'>
              <p>
                Nuestro mejor regalo es compartir este  
              </p>
              <p>gran día, si deseas obsequiearnos algo,</p>
              <p>
                podemos sugerir la opcion.
              </p>
          </div>
          <h3 className='regalos-card-title'>Lluvia de Sobres</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className ="icon icon-tabler icon-tabler-mail" width="60" height="60" viewBox="0 0 24 24" strokeWidth="0.5" stroke="#8CAFC6" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </div>
          <div className='regalos-card-content'>
            <p>La lluvia de sobres es la tradición</p>
            <p className='regalos-card-item'>de regalar dinero en efectivo dentro de un sobre</p>
            <p>el día del evento.</p>
          </div>
          {/* <div className='regalos-card-button'>
            <button className='regalos-card-button'><a target='_blank' href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51407974">Ir a Mesa de Regalos</a></button>
          </div> */}
        </div>
      </div>
      
    </div>
  )
}

export default Regalos