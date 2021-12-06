import { Link } from "react-router-dom";


const CardProductos = ({nombreProducto, precioProducto, imagen, ruta, peso }) =>{
    return(
      <div>
      
      <li class="relative flex  breedCard p-3  ">  
        <Link to = {ruta} class="relative        ">     
          <div class="contenedorImagenPro  ">
            <img class="img p-3"  src={imagen} alt={nombreProducto} />
          </div>
           
          <span class="breedTitle text-lg ">{nombreProducto}</span> 
          <div class=" "> 
          <span class="breedTitle text-lg"  >$ {precioProducto}</span>
          </div>
          <span class="breedTitle text-lg ">{peso}</span> 
           
          <Link >    <div>
             <button type="bottom" className="border hover:bg-orange-300 breedTitle border-pro-100 rounded-lg p-3 bg-pro-50">Comprar</button></div>
          </Link> </Link> </li>
     
     
      </div>   )
  }
  export default CardProductos;