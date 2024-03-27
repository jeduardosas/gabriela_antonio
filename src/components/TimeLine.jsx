import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {

  const settings = {
    bgColor:'var(--color_principal)',
    color:'#fff',
    lineColor:'var(--color_principal)'

  }
  const protocol = [
    
    {
      id:1,
      time:'08:30 a 9:30 PM',
      name:'Recepción',
      icon:'rings_white',
    },

    {
      id:2,
      time:'10:00 PM',
      name:'Boda Civil y Ceremonia',
      icon:'wedding-vows_white'
    },

     {
      id:3,
      time:'10:30 PM',
      name:'baile con familiares',
      icon:'music_white'
    },

    {
      id:4,
      time:'11:00 PM',
      name:'Cena',
      icon:'cutlery_white'
    },

    {
      id:5,
      time:'...Hasta Amanecernos',
      name:'el baile sigue y sigue',
      icon:'party'
    },
  ]
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={`${settings.lineColor}`}
      >
        {
          protocol.map(item=>(
            <VerticalTimelineElement
              key=
                {item.id}
              className=
                "vertical-timeline-element--work"
              contentStyle={
                { background: `${settings.bgColor}`,
                  color:`${settings.color}`,
                  marginRight:'10px' }}
              contentArrowStyle={
                { borderRight: `7px solid ${settings.bgColor}`}}
              date=
                {`${item.time}`}
              dateClassName=
                'custom-date-color'
              iconStyle={
                { background: `${settings.bgColor}`, 
                fill: `${settings.bgColor}`,
                boxShadow:`0 0 0 4px ${settings.bgColor}`}} 
              icon={
                <img src={`/img/icons/${item.icon}.svg`} 
                alt={`ico-${item.icon}`} 
                className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine