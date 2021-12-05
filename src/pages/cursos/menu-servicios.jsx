import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const MenuServicios = () => {
  const [isList, setIsList] = useState(false);
  const [isSubList, setIsSubList] = useState(true);
 
  return (
    <div>

          <div className=" w-full t-20 grid_12 border-bottom-black-tr" >
					<h1 className="headline marble headline">SERVICIOS</h1>
					<div className="page-path headline ">
						<div id="crumbs" >
            <span typeof="v:Breadcrumb">
              <Link  to="/">
                <a     className="text-sm"   property="v:title" href=" ">INICIO</a>
              </Link>
            </span> 
            <span className="delimiter ">|</span> 
            <span className="current pr-4">SERVICIOS</span>
            </div>					
          </div>
				</div>
   
       
         
              <div>
 
                <div className="w-9/12  m-auto relative top-40  ">
                            <div className="  items-center w-9/12 m-auto border border-pro-100 cursor-pointer ">
                                <div className=" w-9/12 ">        
                                    
                                        <div onClick={() => setIsSubList(!isSubList)} fill="none" className="  items-center     w-7/12    
                                               ">
                                          
                                        
                                                <div className="w-7/12  items-center  grid grid-cols-6 ">
                                                  <div className="grid grid-cols-6 " >
                                                        <div className="w-3 p-5 gap-36">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 relative bottom-5 px-3" viewBox="5 5 10 15"   fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg> 
                                                        </div>
                                                        <span className="text-xs font-thin pl-14 pb-9 w-9/12 italic text-center  ">FORMACIÓN</span> 
                                                </div>
                                          
                                                </div>
                                        </div>
                                   
                                    
                                </div>
                            </div>
                            {isSubList === isList && (
                                <div className="  ">
                                    <div className="flex items-center  ">                                        
                                        <Link to="/cursos/curso-fertilizantes" className=" hover:shadow-lg  menu nav-link has-sub-menu bg-orange-100 w-9/12 p-5 border border-pro-100 hover:bg-pro-50 m-auto ">
                                            <div className="items-center      bg-transparent  w-9/12  group border-indigo-500  
                                             group-hover:text-gray-900 transition md:ease-out duration-700      ">
                                                <div className="pl-8  flex w-9/12 items-center">CURSO FERTILIZANTES</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex items-center  ">                                        
                                    <Link to="/cursos/curso-fertilizantes" className=" hover:shadow-lg  menu nav-link has-sub-menu bg-orange-100 w-9/12 p-5 border border-pro-100 hover:bg-pro-50 m-auto ">
                                            <div className="items-center     bg-transparent   w-7/12     
                                             group-hover:text-gray-900 transition md:ease-out duration-700      ">
                                                <div className="pl-8 flex items-center">CURSO CONTROL DE PLAGAS</div>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            )}
                        </div>                             
              </div> 
      <div><div id="app">
        
  <v-app id="inspire">
    <div>

        <v-expansion-panels
        model="panel"
        disabled="disabled"
        multiple
      >
        <v-expansion-panel>
          <div className="text-xs font-thin italic text-center my-10 ">FORMACIÓN</div>
    
          <v-expansion-panel-content className="">
       
          <Link to="/cursos/curso-fertilizantes">     <ul   className="bg-orange-100 w-7/12 p-5 border border-pro-100 hover:bg-pro-50 m-auto" >
                <a href=" " className="  nav-link has-sub-menu">CURSO FERTILIZANTES</a>	</ul></Link>
              <li id="menu-item-x"  >
                <Link to="/menu-servicios/curso-control-de-plagas" ><a href=" " className="  nav-link has-sub-menu ">CURSO CONTROL DE PLAGAS</a></Link></li>
             </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-app>
</div>

</div>
    </div>
  )
}

export default MenuServicios

