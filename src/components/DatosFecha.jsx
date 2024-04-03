import React from 'react'

const DatosFecha = ({datosFechaVisible}) => {
  return (
    <div id='datosFechaSection' className={`datos-fecha ${datosFechaVisible && 'animate__animated animate__slideInUp'}`}>
      <p className='datos-fecha-title'>Celebremos Juntos el día</p>
      <div className="datos-fecha_div">
        <p>04</p>
        <p>Mayo</p> 
        <p>2024</p>
      </div>
    </div>
  )
}

export default DatosFecha