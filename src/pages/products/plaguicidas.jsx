import React from 'react'
import Submenu2 from 'components/Submenu2'
import CardProductos from 'components/CardProductos'
import OxicloruroDeCobre from 'media/productos/oxicloruro-de-cobre.jpg'
import ridomil from 'media/productos/ridomil.jpg'


const Plaguicidas = () => {
    return (
        <div>
            <Submenu2
                title1="PRODUCTOS"
                subtitle1="INICIO"
                subtitle2="PRODUCTOS"
                subtitle3="PLAGUICIDAS"
                ruta1='/'
                ruta2='/products/plaguicidas'
            />
            <div className="relative  w-full top-7 m-auto">
                <div class="two text-xl text-center font-bold w-full mb-40">PLAGUICIDAS</div>

                <div className="breedCardContainer container mx-auto justify-center   ">
                    {/* PLAGUICIDAS */}
                    <CardProductos nombreProducto="Oxicloruro de Cobre" precioProducto="30.000" imagen={OxicloruroDeCobre} ruta='/products/plaguicidas' />
                    <CardProductos nombreProducto="Ridomil" precioProducto="30.000" imagen={ridomil} ruta='/products/plaguicidas' />
                </div>
            </div>
        </div>
    )
}

export default Plaguicidas
