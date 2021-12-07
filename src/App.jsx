import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Articulos from 'pages/admin/Articulos';
import Login from 'pages/auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import "styles/inicio.css";
import "styles/App.css";
import "styles/servicios.css"
import Registro from 'pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import { DarkModeContext } from 'context/darkMode';
import Ventas from 'pages/admin/Ventas';
import { Auth0Provider } from '@auth0/auth0-react';
import Usuarios from 'pages/admin/Usuarios';
import { UserContext } from 'context/userContext';
import PrivateRoute from 'components/PrivateRoute';

import MenuServicios from "pages/cursos/menu-servicios";
import CursoFertilizantes from "pages/cursos/curso-fertilizantes";
import CursoControlPlagas from "pages/cursos/curso-control-plagas";
import Productos from "pages/products/productos";
import Fertilizantes from "pages/products/fertilizantes";
import Plaguicidas from "pages/products/plaguicidas";
import Clones from "pages/products/clones";
import Herramientas from "pages/products/herramientas";
import Infraestructura from "pages/products/infraestructura";
import Contactar from "pages/contactar";
 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (
    <Auth0Provider
      domain='dev-jb58a4-s.us.auth0.com'
      clientId='S9FeasO28YXjShXu5kYs57o6oIh4Jd4g'
      // redirectUri='http://localhost:3000/admin'
      redirectUri='https://cacaotech.herokuapp.com/'

      audience='concesonario-2'
    >
      <div className='App'>
        <UserContext.Provider value={{ userData, setUserData }}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <Router>
              <Switch>
                <Route path={['/admin', '/admin/articulos', '/admin/ventas', '/admin/usuarios']}>
                  <PrivateLayout>
                    <Switch>
                      <Route path='/admin/articulos'>
                        <PrivateRoute roleList={['admin']}>
                          <Articulos />
                        </PrivateRoute>
                      </Route>
                      <Route path='/admin/ventas'>
                        <PrivateRoute roleList={['admin', 'vendedor']}>
                          <Ventas />
                        </PrivateRoute>
                      </Route>
                      <Route path='/admin/usuarios'>
                        <PrivateRoute roleList={['admin']}>
                          <Usuarios />
                        </PrivateRoute>
                      </Route>
                      <Route path='/admin'>
                        <Admin />
                      </Route>
                    </Switch>
                  </PrivateLayout>
                </Route>
                <Route path={['/login', '/registro']}>
                  <AuthLayout>
                    <Switch>
                      <Route path='/login'>
                        <Login />
                      </Route>
                      <Route path='/registro'>
                        <Registro />
                      </Route>
                    </Switch>
                  </AuthLayout>
                </Route>
                <Route
                  path={[
                    "/",
                    "/cursos/menu-servicios",
                    "/cursos/curso-fertilizantes",
                    "/cursos/curso-control-plagas",
                    "/products/productos",
                    "/products/fertilizantes",
                    "/products/plaguicidas",
                    "/products/clones",
                    "/products/herramientas",
                    "/products/infraestructura",
                    "/contactar",
                  ]}
                >
                  <PublicLayout>
                    <Switch>
                      {/* RUTA CONTACTAR */}
                      <Route path="/contactar">
                        <Contactar />
                      </Route>
                      {/* RUTAS PRODUCTOS */}
                      <Route path="/products/infraestructura">
                        <Infraestructura />
                      </Route>
                      <Route path="/products/herramientas">
                        <Herramientas />
                      </Route>
                      <Route path="/products/clones">
                        <Clones />
                      </Route>
                      <Route path="/products/plaguicidas">
                        <Plaguicidas />
                      </Route>
                      <Route path="/products/fertilizantes">
                        <Fertilizantes />
                      </Route>
                      <Route path="/products/productos">
                        <Productos />
                      </Route>
                      {/* RUTAS SERVICIOS */}
                      <Route path="/cursos/curso-control-plagas">
                        <CursoControlPlagas />
                      </Route>
                      <Route path="/cursos/curso-fertilizantes">
                        <CursoFertilizantes />
                      </Route>
                      <Route path="/cursos/menu-servicios">
                        <MenuServicios />
                      </Route>                
                    <Route path='/'>
                      <Index />
                    </Route>
                    </Switch>
                  </PublicLayout>
                </Route>
              </Switch>
            </Router>
          </DarkModeContext.Provider>
        </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;
