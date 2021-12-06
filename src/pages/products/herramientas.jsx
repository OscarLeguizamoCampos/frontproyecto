import React from 'react'
import Submenu2 from 'components/Submenu2'
import CardProductos from 'components/CardProductos'
import bombadeespaldamotor from 'media/productos/bomba-espalda-motor.png'
import bombaespalda from 'media/productos/bomba-espalda.jpg'
import serruchoPodador from 'media/productos/serrucho-podador.jpg'
import tijeraAerea from 'media/productos/tijera-aerea.jpg'

const Herramientas = () => {
    return (
        <div>
            <Submenu2
                title1="HERRAMIENTAS"
                subtitle1="INICIO"
                subtitle2="PRODUCTOS"
                subtitle3="HERRAMIENTAS"
                ruta1='/'
                ruta2='/products/productos'
            />
            <div className="relative  w-full top-7 m-auto">
                <div class="two text-xl text-center font-bold w-full mb-40">HERRAMIENTAS</div>

                <div className="breedCardContainer container mx-auto justify-center   ">
                    {/* HERRAMIENTAS */}
                    <CardProductos nombreProducto="Bomba de espalda a motor" precioProducto="30.000" imagen={bombadeespaldamotor} ruta='/products/herramientas' />
                    <CardProductos nombreProducto="Bomba de espalda manual" precioProducto="30.000" imagen={bombaespalda} ruta='/products/herramientas' />
                    <CardProductos nombreProducto="Serrucho podador" precioProducto="30.000" imagen={serruchoPodador} ruta='/products/herramientas' />
                    <CardProductos nombreProducto="Tijera Aerea" precioProducto="30.000" imagen={tijeraAerea} ruta='/products/herramientas' />
                </div>
            </div>
        </div>
    )
}

export default Herramientas
