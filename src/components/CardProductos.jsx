import { Link } from "react-router-dom";


const CardProductos = ({nombreProducto, precioProducto, imagen, ruta, peso, unidad }) =>{
    return(
      <div>
      
      <li class="relative flex  breedCard p-3  ">  
        <Link to = {ruta} class="relative        ">     
          <div class="contenedorImagenPro  ">
            <img class="img p-3"  src={imagen} alt={nombreProducto} />
          </div>
           
          <span class="breedTitle text-lg ">{nombreProducto}</span> 
          <div class="  "> 
            <span class="breedTitle text-lg"  >$ {precioProducto}</span>
          
          </div>
          <span class="breedTitle text-lg"  >Cantidad </span>
          <input
            name="cantidad"
            className="bg-gray-50 border border-pro-100 p-1 w-20 rounded-lg ml-6 mb-0"
            type="number"
            min={0}
            max={99}
            placeholder="0"
            required
          /> <div>
          <span class="breedTitle text-lg ">Capacidad: {peso} {unidad}</span> </div>
           
          <Link >    <div>
             <button type="bottom" className="border hover:bg-orange-300 breedTitle border-pro-100 rounded-lg p-3 w-10/12 bg-pro-50">Comprar</button></div>
          </Link> </Link> </li>
     
     
      </div>   )
  }
  export default CardProductos;