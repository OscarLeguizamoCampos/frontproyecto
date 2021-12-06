import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Submenu1 from "components/Submenu1";
const MenuServicios = () => {
  const [isList, setIsList] = useState(false);
  const [isSubList, setIsSubList] = useState(true);

  return (
    <div>
      <Submenu1 title1="SERVICIOS" subtitle1="INICIO" subtitle2="SERVICIOS" />

      <div id="app">
        <div className="w-9/12  m-auto relative pb-56 top-40 cursor-pointer  ">
          <div className="  items-center w-9/12 m-auto bg-gray-200 hover:bg-gray-100 border border-gray-200 rounded-md cursor-pointer ">
            <div className=" w-full ">
              <div
                onClick={() => setIsSubList(!isSubList)}
                fill="none"
                className="  items-center     w-full    
                                               "
              >
                <div className="w-full  items-center  grid grid-cols-6 ">
                  <div className="grid grid-cols-6 pt-10">
                    <div className="w-3 p-4 gap-36">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 relative bottom-5 px-3"
                        viewBox="5 5 10 15"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-thin pl-14 pb-9 w-full italic text-center  ">
                      FORMACIÓN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isSubList === isList && (
            <div className="  ">
              <div className="flex items-center  ">
                <Link
                  to="/cursos/curso-fertilizantes"
                  className=" hover:shadow-lg  menu nav-link has-sub-menu bg-orange-100 w-9/12 p-5 border-b border-t border-pro-100 hover:bg-pro-50 m-auto "
                >
                  <div
                    className="items-center      bg-transparent  w-9/12  group border-indigo-500  
                                             group-hover:text-gray-900 transition md:ease-out duration-700      "
                  >
                    <div className="pl-8  flex w-9/12 items-center">
                      CURSO FERTILIZANTES
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex items-center  ">
                <Link
                  to="/cursos/curso-fertilizantes"
                  className=" hover:shadow-lg  menu nav-link has-sub-menu bg-orange-100 w-9/12 p-5 border-b border-pro-100 hover:bg-pro-50 m-auto "
                >
                  <div
                    className="items-center     bg-transparent   w-7/12     
                                             group-hover:text-gray-900 transition md:ease-out duration-700      "
                  >
                    <div className="pl-8 flex items-center">
                      CURSO CONTROL DE PLAGAS
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div>
          {/* <v-app >
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
  </v-app> */}
        </div>
      </div>
    </div>
  );
};

export default MenuServicios;
