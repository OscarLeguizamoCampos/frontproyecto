import React from 'react';
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';
// import useActiveRoute from 'hooks/useActiveRoute';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateComponent from './PrivateComponent';

const Sidebar = () => {
  const { user,  } = useAuth0();

  // const cerrarSesion = () => {
  //   logout({ returnTo: 'http://localhost:3000/admin' });
  //   localStorage.setItem('token', null);
  // };

  return (
    <nav className='hidden fixed lg:flex lg:w-72 border border-gray-300 h-full flex-col  bg-yellow-100 w-72  sidebar'>
     <li> <Link to='/admin'>
        <ImagenLogo />
      </Link></li>

      <div className=' '>
        <div className="border-t  border-pro-100" >
        <Ruta icono='fas fa-user' ruta='/admin/perfil' nombre='Perfil' usuario={user} /></div>
        <PrivateComponent roleList={['admin']}>
          <Ruta icono='fas fa-box' ruta='/admin/articulos' nombre='Articulos' />
        </PrivateComponent>
        <PrivateComponent roleList={['admin', 'vendedor']}>
          <Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='Ventas' />
        </PrivateComponent>
        <PrivateComponent roleList={['admin']}>
          <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
        </PrivateComponent>
      </div>
      {/* <button onClick={() => cerrarSesion()}>Cerrar Sesión</button> */}
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre, usuario }) => {
  console.log('usuario', usuario);
  // const isActive = useActiveRoute(ruta);
  return (
    <Link className=" menu nav-link has-sub-menu inline-block  justify-between   " to={ruta}>
      <li 
      className="items-center md:hidden italic pl-5 pt-3 bg-transparent h-11 w-72  group  hover:bg-pro-50 
                                            hover:shadow-lg group-hover:text-gray-900 transition md:ease-out duration-700 grid grid-cols-1 align-middle border-b  border-pro-100"
        // className={`p-1 my-2  bg-${
        //   isActive ? 'pro-100' : 'pro-50'
        // } hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
      >
        {usuario ? (
          <><i className={`${icono} w-10`} />
            {/* //  <img src={usuario.picture} className='h-5 w-5 rounded-full' />  */}
            {usuario.name}
          </>
        ) : (
          <>
            <i className={`${icono} w-10`} />
            {nombre}
          </>
        )}
      </li>
    </Link>
  );
};

export default Sidebar;
