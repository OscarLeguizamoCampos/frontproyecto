 

import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

// const executeRequest = async (options, resCallback, errCallback) => {
//   await axios.request(options).then(resCallback).catch(errCallback);
// };

// CRUD ARTICULOS

export const crearArticulo = async (data,  successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'https://cacaotechb.herokuapp.com/articulos/',
    headers: { 'Content-Type': 'application/json', Authorization: getToken()  },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerArticulos = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://cacaotechb.herokuapp.com/articulos/',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarArticulo = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `https://cacaotechb.herokuapp.com/articulos/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken()  },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarArticulo = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `https://cacaotechb.herokuapp.com/articulos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CRUD USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://cacaotechb.herokuapp.com/usuarios',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://cacaotechb.herokuapp.com/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `https://cacaotechb.herokuapp.com/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


// CRUD VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'https://cacaotechb.herokuapp.com/ventas',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};