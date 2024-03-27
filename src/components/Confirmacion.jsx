import React from 'react'

const Confirmacion = () => {
  return (
    <>
      <div className='confirmar-title'>
        <img src="/img/icons/confirmar.svg" alt="icon-confirm" />
        <h2>Confirmación de Asistencia</h2>
      </div>

      <div className='confirmar-cards'>
        <div className="confirmar-card  sombra">
          <div className="confirmar-border centrar">
            <div className="confirmar-whats">
              <img src="/img/icons/whats.svg" alt="whatsapp-icon" />
              <p>WhatsApp</p>
            </div>
            
            <div className='confirmacion-buttons-content'>
              <div className="confirmar-buttons-content-item">
                <div className='confirmar-icon'>
                  <img src="/img/icons/novia.svg" alt="novia_icon" />
                </div>
                <button>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=527331259517&text=¡Hola!👋%0AQuiero%20confirmar%20mi%20asistencia%0Aa%20la%20Boda%20de%20Gabriela%20y%20José%20Antonio%20💒🤵🏻👰🏻">
                    CONFIRMAR
                  </a>
                </button>
              </div>
              <div className="confirmar-buttons-content-item">
                <div className='confirmar-icon'>
                  <img src="/img/icons/novio.svg" alt="novio_icon" />
                </div>
                <button>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=527331040428&text=¡Hola!👋%0AQuiero%20confirmar%20mi%20asistencia%0Aa%20la%20Boda%20de%20Gabriela%20y%20José%20Antonio%20💒🤵🏻👰🏻">CONFIRMAR</a></button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Confirmacion