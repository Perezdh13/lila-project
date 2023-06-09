import React, { useEffect, useState } from 'react';
import BubbleRight from "../../assets/img/BubbleRight.png"
import BubbleFinal from "../../assets/img/BubbleFinal.png"
import './Bubble.css'
import '../../views/styles/Styles.css'
import '../../views/home/HomePageView'
import { Link } from 'react-router-dom';

function Bubble() {
  const [texto, setTexto] = useState('Hola,  <br/> ¿Cómo estás?');
  const [mostrarInputs, setMostrarInputs] = useState(false);
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setTexto('Hola, ¿Cómo estás?');
      setMostrarInputs(false);
    }, 0);

    const timeout2 = setTimeout(() => {
      setTexto('¿Juegas conmigo? Dime tu nombre y contraseña 👇');
      setMostrarInputs(false);

      const timeout3 = setTimeout(() => {
        setMostrarInputs(true);
      }, 4000);

      return () => clearTimeout(timeout3);
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nombre: ${nombre}, Contraseña: ${contraseña}`);
  };

  return (
    <div className='Bubble'style={{margin:"0px"}}>
      <div className='container' style={{marginRight:"0px"}}>
        <div className='texto-contenedor' style={{width: "25vw", height:"15vh", position:"relative"}}>
          <img src={BubbleRight} style={{width:"25vw", position:'absolute'}}/>
          <p className='texto' style={{fontSize:"20px", fontWeight:"bold", width:"15vw", position:"relative", marginTop:"20%", marginLeft:"20%", transform:"translate (-50%, -50%)"}}>{texto}</p>
        </div>
        {mostrarInputs && (
          <div className='input-contenedor'>
            <img src={BubbleFinal} style={{width:"25vw", position:'absolute', zIndex:"1", marginTop:"9.8%"}}/>
            <form onSubmit={handleSubmit} style={{zIndex:"2", marginTop:"14rem", height:"2vh", fontWeight:"bold"}}>
              <label>
                Nombre 
              </label>
              <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <label className="pasword">
                Contraseña
              </label>
                <input type='password' value={contraseña} onChange={(e) => setContraseña(e.target.value)} style={{position:"relative"}}/>
                <Link to="/logged">
              <button type='submit' style={{marginRight:"2.5rem"}}>Enviar</button>
                </Link>
            </form>
          </div>
        )}
      </div>  
    </div>
  );
}

export default Bubble; 
 





  

    












