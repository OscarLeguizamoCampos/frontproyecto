import React from 'react'
import Submenu2 from 'components/Submenu2'
import CardProductos from 'components/CardProductos'
import cajnonFementador from 'media/productos/cajon-fermentador.jpg'
import marquesina from 'media/productos/marquesina.jpg'
const Infraestructura = () => {
    return (
        <div>
                        <Submenu2
                title1="INFRAESTRUCTURA"
                subtitle1="INICIO"
                subtitle2="PRODUCTOS"
                subtitle3="INFRAESTRUCTURA"
                ruta1='/'
                ruta2='/products/productos'
            />
            <div className="relative  w-full top-7 m-auto">
            <div class="two text-xl text-center font-bold w-full mb-40">INFRAESTRUCTURA</div>
            
            <div className ="breedCardContainer container mx-auto justify-center   ">
            {/* INFRAESTRUCTURA */}
            <CardProductos nombreProducto = "Cajon Fermentador" precioProducto = "30.000" imagen = {cajnonFementador} ruta = '/products/infraestructura'/>
            <CardProductos nombreProducto = "Marquesina" precioProducto = "30.000" imagen = {marquesina} ruta = '/products/infraestructura'/>
            </div>
            </div>
        </div>
    )
}

export default Infraestructura
