import React from 'react';
// import TriggerDarkMode from './TriggerDarkMode';
import { useAuth0 } from '@auth0/auth0-react';
import logo from "media/cacao-tech.png";
import "styles/inicio.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <header>
      <div className="">
        <div className="row  ">
          <div className="flex flex-col justify-center ">
            <img src={logo} className="object-fill h- max-h-40" alt="cacao-tech2-0" />
          </div>
        </div>
      </div>

      <div color="#d16b18">
        {/* <MenuMobile /> */}
        <div className="    collapse navbar-collapse navbar navbar-expand-sm navbar-light   fondo flex flex-shrink mx-auto box-content  wrapper menu-bg custom-menu-bg border-bottom-black-tr  ">



          <div target="nav-collapse"></div>
          <div id="nav-collapse" is-nav={true.toString()}>

            <div className="menu nav justify-content-start pr-8 hidden md:block   ">

              <ul
                id="menu-menu-1" className="menu  flex  justify-end">
                <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-21">
                  <Link to="/" className=" nav-link has-sub-menu">
                    INICIO
                  </Link>
                </li>

                <li
                  id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-25"
                >
                  <Link to="/cursos/menu-servicios">SERVICIOS</Link>
                  <ul className="sub-menu">
                    <li id="menu-item-88" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88">
                      <Link to="/cursos/curso-fertilizantes">
                        CURSO FERTILIZANTES
                      </Link>
                    </li>
                    <li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                      <Link to="/cursos/curso-control-plagas">
                        CURSO CONTROL DE PLAGAS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-25">
                  <Link to="/products/productos">PRODUCTOS</Link>
                  <ul className="sub-menu">
                    <li id="menu-item-160" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-160">
                      <Link to="/products/fertilizantes" className=" nav-linkhas-sub-menu">
                        FERTILIZANTES
                      </Link>
                    </li>
                    <li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174">
                      <Link to="/products/plaguicidas" className=" nav-linkhas-sub-menu">
                        PLAGUICIDAS
                      </Link>
                    </li>
                    <li id="menu-item-186" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-186">
                      <Link to="/products/clones" className=" nav-linkhas-sub-menu">
                        CLONES
                      </Link>
                    </li>
                    <li id="menu-item-198" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-198">
                      <Link to="/products/herramientas" className=" nav-linkhas-sub-menu">
                        HERRAMIENTAS
                      </Link>
                    </li>
                    <li id="menu-item-209" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-209">
                      <Link to="/products/infraestructura" className=" nav-linkhas-sub-menu">
                        INFRAESTRUCTURA
                      </Link>
                    </li>
                  </ul>
                  <span class="icon-angle-down"></span>
                </li>
                <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20">
                  <Link to="/contactar" className=" nav-link has-sub-menu">
                    Contactar
                  </Link>
                </li>
                <li className="     ">

                  <button onClick={() => loginWithRedirect()} class="botonGenerico mainButton  inline-block  align-top">
                    <p class="textbutton">Acceder</p>
                  </button>

                </li>

              </ul>
            </div>
            <b-navbar-nav className="ml-auto"></b-navbar-nav>
          </div>
        </div>
      </div>


      {/* <ul class="navbar">
      <li>
        <img src={logo} alt="imagen" class="logo" />
      </li>
      <li>
        <button class="botonGenerico mainButton">Nuevo post</button>
      </li>
 
      <li>
        <button class="botonGenerico secondaryButton">Login</button>
      </li>
 
</ul>*/}
    </header>
    // <nav className='bg-red-400'>
    //   <ul className='flex w-full justify-between my-3'>
    //     <li>Logo</li>
    //     <li>Navegacion1</li>
    //     <li>Navegacion2</li>
    //     <li>
    //       <TriggerDarkMode />
    //     </li>
    //     <li className='px-3'>
    //       <button
    //         onClick={() => loginWithRedirect()}
    //         className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'
    //       >
    //         Iniciar Sesión
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
