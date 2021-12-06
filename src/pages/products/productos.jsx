import Submenu1 from "components/Submenu1" 
import CardProductos from 'components/CardProductos'
import fosforita from 'media/productos/fosforita.jpg';
import KCL from 'media/productos/Kcl.jpg'
import nitrafos from 'media/productos/nitrafos.jpg'
import inbiosil from 'media/productos/inbiosil.png'
import silimagna from 'media/productos/silimagna.jpg'
import BultoUrea from 'media/productos/Bulto-urea.jpg'
import OxicloruroDeCobre from 'media/productos/oxicloruro-de-cobre.jpg'
import ridomil from 'media/productos/ridomil.jpg'
import bombadeespaldamotor from 'media/productos/bomba-espalda-motor.png'
import bombaespalda from 'media/productos/bomba-espalda.jpg'
import serruchoPodador from 'media/productos/serrucho-podador.jpg'
import tijeraAerea from 'media/productos/tijera-aerea.jpg'
import cajnonFementador from 'media/productos/cajon-fermentador.jpg'
import marquesina from 'media/productos/marquesina.jpg'

const Productos = () => {
    return (
        <div>
            <Submenu1
                title1="PRODUCTOS"
                subtitle1="INICIO"
                subtitle2="PRODUCTOS"
                ruta='/'
            />
            <div className="relative  w-full top-7 m-auto">
            <div class="two text-xl text-center font-bold w-full mb-40">PRODUCTOS</div>
            
            <div className ="breedCardContainer container mx-auto justify-center   ">
                {/* FERTILIZANTES */}
            <CardProductos nombreProducto = "Fosforita" precioProducto = "30.000" imagen = {fosforita} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "KCL" precioProducto = "30.000" imagen = {KCL}  ruta = '/products/fertilizantes' /> 
            <CardProductos nombreProducto = "Nitrafos" precioProducto = "30.000" imagen = {nitrafos} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "Inbiosil" precioProducto = "30.000" imagen = {inbiosil} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "Silimagna" precioProducto = "30.000" imagen = {silimagna} ruta = '/products/fertilizantes'/>
            <CardProductos nombreProducto = "Bulto Urea" precioProducto = "30.000" imagen = {BultoUrea} ruta = '/products/fertilizantes'/>
            {/* PLAGUICIDAS */}
            <CardProductos nombreProducto = "Oxicloruro de Cobre" precioProducto = "30.000" imagen = {OxicloruroDeCobre} ruta = '/products/plaguicidas'/>
            <CardProductos nombreProducto = "Ridomil" precioProducto = "30.000" imagen = {ridomil} ruta = '/products/plaguicidas'/>
            {/* HERRAMIENTAS */}
            <CardProductos nombreProducto = "Bomba de espalda a motor" precioProducto = "30.000" imagen = {bombadeespaldamotor} ruta = '/products/herramientas'/>
            <CardProductos nombreProducto = "Bomba de espalda manual" precioProducto = "30.000" imagen = {bombaespalda} ruta = '/products/herramientas'/>
            <CardProductos nombreProducto = "Serrucho podador" precioProducto = "30.000" imagen = {serruchoPodador} ruta = '/products/herramientas'/>
            <CardProductos nombreProducto = "Tijera Aerea" precioProducto = "30.000" imagen = {tijeraAerea} ruta = '/products/herramientas'/>
            {/* INFRAESTRUCTURA */}
            <CardProductos nombreProducto = "Cajon Fermentador" precioProducto = "30.000" imagen = {cajnonFementador} ruta = '/products/infraestructura'/>
            <CardProductos nombreProducto = "Marquesina" precioProducto = "30.000" imagen = {marquesina} ruta = '/products/infraestructura'/>
            </div>
            </div>
        </div>
    )
}

export default Productos
