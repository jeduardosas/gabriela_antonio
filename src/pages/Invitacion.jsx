
import { useLocation, Navigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import CountDown from "/@/components/ContDown";
import Header from "/@/components/Header";
import Datos from "/@/components/Datos";
import Ubicaciones from "/@/components/ubicaciones";
import Confirmacion from '/@/components/Confirmacion';
import Reservacion from '/@/components/Reservacion';
import TimeLine from "../components/TimeLine";
import Slider from "../components/Slider";
import Regalos from "../components/Regalos";
import Footer from "../components/Footer";
import useScrollVisible from "/@/hooks/useScrollVisible";
import CodigoVestimenta from "../components/CodigoVestimenta";
import 'animate.css'
import '/@/styles/invitacion.css'


const Invitacion = () => {
  const song = '/music/song.mp3'
  
  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >6){
    return <Navigate to="/notfound" />
  }
  //VARIABLES PARA MANEJAR LAS ANIMACIONES
  const confirmacionVisible = useScrollVisible('confirmacionSection')
  const datosVisible = useScrollVisible('datosSection')
  const datosFechaVisible = useScrollVisible('datosFechaSection')
  const cardCeremoniaVisible = useScrollVisible('cardCeremoniaSection')
  const cardRecepcionVisible = useScrollVisible('cardRecepcionSection')

  return (
    <div className="centrar">

      <div className="img-fondo">
        <img loading="lazy" className="img-fondo-1" src="/img/img-1.png" alt="iimg-fondo" />
        <img loading="lazy" className="img-fondo-2" src="/img/img-2.png" alt="iimg-fondo" />
      </div>

      {/* REPRODUCTOR */}
      
      <div className="reproductor">
        <ReactAudioPlayer 
          className="reproductor" 
          src={song} 
          autoPlay={true}
          preload="auto"
          controls/>
      </div> 
      <Header />

      <div id="datosSection" className="datos">
        <Datos datosVisible={datosVisible} datosFechaVisible={datosFechaVisible} />
      </div>
      
        <CountDown />
      

      <div className="ubicaciones">
        <Ubicaciones 
          cardCeremoniaVisible={cardCeremoniaVisible} 
          cardRecepcionVisible={cardRecepcionVisible}/>
      </div>
      {/* <div className="linea"></div> */}
      

      
      
        <TimeLine />
       
      

      {/* <div className="protocolo">
        
        <div className='protocolo-img' >
          <img src="/img/protocolo.png" alt="" />
        </div>
      </div> */}
        <Regalos />
      

      <div className="slider">
        <Slider />
      </div>

      <div className="lugares">
        <Reservacion pases={pases} />
      </div>

      <div  id='confirmacionSection' className={`confirmar ${confirmacionVisible && 'animate__animated animate__fadeInLeft'}`}>
        <Confirmacion/>
      </div>

      {/* <CodigoVestimenta /> */}

      <div>
        <Footer />
      </div>
      
    </div>
    
    
  );
};

export default Invitacion;
