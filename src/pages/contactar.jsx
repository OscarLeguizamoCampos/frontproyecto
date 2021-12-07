import React from 'react'

const Contactar = () => {
    return (
        <div className="justify-between m-auto">
            
                <div className="seccion-contacto ">
                    <div className="contactar">
                        <div className ="contactar__formulario"></div>
                        <h3 className ="contactar__titulo">CONTACTAR</h3>
 
                         <form action="">
                             <input type="text" name="Nombres" placeholder="Nombres" />
                             <input  type ="text" name="Apellidos" placeholder="Apellidos"/>
                             <input type ="text" name="Correo" placeholder="Correo"/>
                            <textarea name="Mensaje" placeholder="Escriba aqui su mensaje" Style=" background-color: #dba47927;border: 1px solid #D16B18; border-radius: 5px;margin: 0px 0px 20px; width: 468px; height: 274px;"></textarea>
                            <button onClic className="w-4/12 p-2 rounded-md bg-pro-100 hover:bg-orange-600 text-white border ">Enviar</button>
                         </form>
                        <div Style="position: relative; left: 650px; top: -520px;"> 
                            <div className ="contacta">
                                <div className ="contactar__mapa"></div>
                                    <h3 className =" ">COMO LLEGAR</h3>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3972.4327735417805!2d-74.49111416525963!3d5.35073048117287!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1638851777661!5m2!1ses-419!2sco" width="450" height="400" className="border relative  top-7" allowfullscreen="" loading="lazy"></iframe>
                        
                                </div>
                            </div>
                    </div>
                </div>
                         
                    
                    

        </div>
             
                )
}

                export default Contactar
