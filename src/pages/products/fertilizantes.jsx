import Submenu2 from 'components/Submenu2'
import React from 'react'
import CardProductos from 'components/CardProductos'
import fosforita from 'media/productos/fosforita.jpg';
import KCL from 'media/productos/Kcl.jpg'
import nitrafos from 'media/productos/nitrafos.jpg'
import inbiosil from 'media/productos/inbiosil.png'
import silimagna from 'media/productos/silimagna.jpg'
import BultoUrea from 'media/productos/Bulto-urea.jpg'

const Fertilizantes = () => {
    return (
        <div>
            <Submenu2
                title1="FERTILIZANTES"
                subtitle1="INICIO"
                subtitle2="PRODUCTOS"
                subtitle3="FERTILIZANTES"
                ruta1='/'
                ruta2='/products/productos'
            />
            <div className="relative  w-full top-7 m-auto">
            <div class="two text-xl text-center font-bold w-full mb-40">FERTILIZANTES</div>
            
            <div className ="breedCardContainer container mx-auto justify-center   ">
                {/* FERTILIZANTES */}
            <CardProductos nombreProducto = "Fosforita" precioProducto = "30.000" imagen = {fosforita} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "KCL" precioProducto = "30.000" imagen = {KCL}  ruta = '/products/fertilizantes' /> 
            <CardProductos nombreProducto = "Nitrafos" precioProducto = "30.000" imagen = {nitrafos} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "Inbiosil" precioProducto = "30.000" imagen = {inbiosil} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "Silimagna" precioProducto = "30.000" imagen = {silimagna} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "Bulto Urea" precioProducto = "30.000" imagen = {BultoUrea} ruta = '/products/fertilizantes'/>
  </div>
            </div>
        </div>
         
    )
}

export default Fertilizantes
