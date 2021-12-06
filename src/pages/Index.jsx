import { useDarkMode } from 'context/darkMode';
import React from 'react';
import CardRecomendados from "components/CardRecomendados";
import CardTeam from "components/CardTeam";
import CardTestimonio from "components/CardTestimonio";
import Carrusel from "components/Carrusel";
import Vivian from "media/vivian.jpeg" 
import Oscar from "media/oscar.jpg" 

import fosforita from 'media/productos/fosforita.jpg';
import KCL from 'media/productos/Kcl.jpg'
import nitrafos from 'media/productos/nitrafos.jpg'
const Index = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`  bg-gray-${darkMode ? '900' : '50'}`}>
    <>
     <div className=" "><Carrusel /></div>
      <section>
        <h1 class="relative choco text-center font-semibold text-6x1 row top-2 bottom-2 p-8">PRODUCTOS RECIENTES</h1>
        <div>
        <ul className ="breedCardContainer container mx-auto justify-center   ">
          <CardRecomendados nombreProducto = "Fosforita" precioProducto = "30.000" imagen = {fosforita} ruta = '/products/fertilizantes'/>
          <CardRecomendados nombreProducto = "KCL" precioProducto = "30.000" imagen = {KCL}  ruta = '/products/fertilizantes' /> 
          <CardRecomendados nombreProducto = "Nitrafos" precioProducto = "30.000" imagen = {nitrafos} ruta = '/products/fertilizantes'/>

        </ul>
        </div>

      </section>
      <section>
      <h1 class="relative choco text-center font-semibold text-6x1 row top-2 bottom-2 p-8">TESTIMONIOS</h1>
       
              <ul className ="breedCardContainer2    ">
              <CardTestimonio imagen="https://placeimg.com/260/260/people"
                    title="Testimonio 1"
                    texto="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <CardTestimonio imagen="https://placeimg.com/260/260/people"
                    title="Testimonio 2"
                    texto="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <CardTestimonio imagen="https://placeimg.com/260/260/people"
                    title="Testimonio 3"
                    texto="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              </ul>
      </section>
      <section>
      <h1 class="relative choco text-center font-semibold text-6x1 row top-2 bottom-2 p-8">EQUIPO</h1>
  
        <ul className="breedCardTeamContainer">
          <CardTeam nombreEstudiante='OSCAR LEGUIZAMO' imagen= {Oscar} cargo='Product Owner' />
          <CardTeam nombreEstudiante='VIVIAN HOME' imagen= {Vivian} cargo='Scrum Master' />
          {/* <CardTeam nombreEstudiante='ANDRES CARRILLO' imagen='https://placeimg.com/150/150/people' cargo='Team Developer' />
          <CardTeam nombreEstudiante='DAVIAN GALLEGO' imagen='https://placeimg.com/150/150/people' cargo='Team Developer' />
          <CardTeam nombreEstudiante='WILSON CORTES' imagen='https://placeimg.com/150/150/people' cargo='Team Developer' /> */}
        </ul>
      </section>
     
    </>
  </div>
  );
};

export default Index;
