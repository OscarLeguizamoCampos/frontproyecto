

import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import ReactLoading from 'react-loading';
import "react-toastify/dist/ReactToastify.css";
import { obtenerArticulos, crearArticulo,  editarArticulo, eliminarArticulo } from "utils/api";
// import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from "components/PrivateComponent";

const Articulos = () => {
  // const { getAccessTokenSilently } = useAuth0();
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [articulos, setArticulos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear Nuevo Articulo");
  const [colorBoton, setColorBoton] = useState("orange");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticulos = async () => {
      setLoading(true);
      await obtenerArticulos(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setArticulos(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error('Salio un error:', error);
          setLoading(false);
        }
      );
    };
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchArticulos();
    }
  }, [ejecutarConsulta]);
 

  useEffect(() => {
    //obtener lista de Articulos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear Nuevo Articulo");
      setColorBoton("orange");
    } else {
      setTextoBoton("Mostrar Todos los Articulos");
      setColorBoton("gray");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col w-full">
        <h2 className="text-lg italic font-extrabold text-center text-gray-900">
          Administración de Articulos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaArticulos
          loading={loading}
          listaArticulos={articulos}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      ) : (
        <FormularioCreacionArticulos
          setMostrarTabla={setMostrarTabla}
          listaArticulos={Articulos}
          setArticulos={setArticulos}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaArticulos = ({ loading, listaArticulos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [articulosFiltrados, setArticulosFiltrados] = useState(listaArticulos);

  useEffect(() => {
    setArticulosFiltrados(
      listaArticulos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaArticulos]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar"
        className="border border-pro-100 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500"
      />
      <h2 className="text-2xl font-extrabold text-gray-800">
        Todos los Articulos
      </h2>
      <div className="hidden md:flex w-full">
      {loading ? (
          <ReactLoading type='cylon' color='#abc123' height={667} width={375} />
        ) : (
        <table className="tabla">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del Articulo</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Unidad de medida</th>
              <th>Cantidad</th>
              <PrivateComponent roleList={['admin']}>
                  <th>Acciones</th>
              </PrivateComponent>
            </tr>
          </thead>
          <tbody>
            {articulosFiltrados.map((articulo) => {
              return (
                <FilaArticulo
                  key={nanoid()}
                  articulo={articulo}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
        )}
      </div>
      <div className="flex flex-col w-full m-2 md:hidden">
        {articulosFiltrados.map((el) => {
          return (
            <div className="bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl">
              <span>{el.name}</span>
              <span>{el.category}</span>
              <span>{el.description}</span>
              <span>{el.model}</span>
              <span>{el.unit}</span>
              <span>{el.cantidad}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FilaArticulo = ({ articulo, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoArticulo, setInfoNuevoArticulo] = useState({
    _id: articulo._id,
    name: articulo.name,
    category: articulo.category,
    description: articulo.description,
    model: articulo.model,
    unit: articulo.unit,
    cantidad: articulo.cantidad
  });

  const actualizarArticulo = async () => {
    //enviar la info al backend

    await editarArticulo(
      articulo._id,
      {
        name: infoNuevoArticulo.name,
        category: infoNuevoArticulo.category,
        description: infoNuevoArticulo.description,
        model: infoNuevoArticulo.model,
        unit: infoNuevoArticulo.unit,
        cantidad: infoNuevoArticulo.cantidad,
      },
      (response) => {
        console.log(response.data);
        toast.success("Articulo modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error("Error modificando el Articulo");
        console.error(error);
      }
    );
  };

  const deleteArticle = async () => {
    await eliminarArticulo(
      articulo._id,
      (response) => {
        console.log(response.data);
        toast.success("Articulo eliminado con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el Articulo");
      }
    );

    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoArticulo._id}</td>
          <td>
            <input
              className="bg-gray-50 border border-pro p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.name}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  name: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-pro p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.category}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  category: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-pro p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.description}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  description: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-pro p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.precio}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  model: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-pro p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.unit}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  unit: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-pro p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.cantidad}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  cantidad: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{articulo._id.slice(20)}</td>
          <td>{articulo.name}</td>
          <td>{articulo.category}</td>
          <td>{articulo.description}</td>
          <td>{articulo.model}</td>
          <td>{articulo.unit}</td>
          <td>{articulo.cantidad}</td>
        </>
      )}
      <PrivateComponent roleList={['admin']}>    
        <td>
          <div className="flex w-full justify-around">
            {edit ? (
              <>
                <Tooltip title="Confirmar Edición" arrow>
                  <i
                    onClick={() => actualizarArticulo()}
                    className="fas fa-check text-green-700 hover:text-green-500"
                  />
                </Tooltip>
                <Tooltip title="Cancelar edición" arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className="fas fa-ban text-yellow-700 hover:text-yellow-500"
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Editar Articulo" arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                  />
                </Tooltip>
                <Tooltip title="Eliminar Articulo" arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    className="fas fa-trash text-red-700 hover:text-red-500"
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className="p-8 flex flex-col">
              <h1 className="text-gray-900 text-2xl font-bold">
                ¿Está seguro de querer eliminar el articulo?
              </h1>
              <div className="flex w-full items-center justify-center my-4">
                <button
                  onClick={() => deleteArticle()}
                  className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
                >
                  Sí
                </button>
                <button
                  onClick={() => setOpenDialog(false)}
                  className="mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md"
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
        </td>
      </PrivateComponent>
    </tr>
  );
};
const FormularioCreacionArticulos = ({ setMostrarTabla, listaArticulos, setArticulos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoArticulo = {};
    fd.forEach((value, key) => {
      nuevoArticulo[key] = value;
    });

    await crearArticulo(
      {
        name: nuevoArticulo.name,
        category: nuevoArticulo.category,
        description: nuevoArticulo.description,
        model: nuevoArticulo.model,
        unit: nuevoArticulo.unit,
        cantidad: nuevoArticulo.cantidad,
      },
      (response) => {
        console.log(response.data);
        toast.success('Artículo agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un artículo');
      }
    );
 

    setMostrarTabla(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo Articulo
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <label className="flex flex-col" Style="width:394px;" htmlFor="nombre">
          Nombre del Articulo
          <input
            name="name"
            className="bg-pro-50 border h-11 border-pro-100 p-2 rounded-lg m-2"
            type="text"
            placeholder="Nombre articulo"
            required
          />
        </label>
        <label className="flex flex-col  " htmlFor="categoria">
          Categoria
          <select
            Style="background-color:#dba47927;"
            className="  border h-11 border-pro-100 p-2 rounded-lg m-2"
            name="category"
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Fertilizantes</option>
            <option>Plaguicidas</option>
            <option>Clones</option>
            <option>Herramientas</option>
            <option>Infraestructura</option>
          </select>
        </label>
        <label className="flex flex-col" Style="width:394px;" htmlFor="descripcion">
          Descripción
          <input
            name="description"
            className="bg-gray-50 border h-11 border-pro-100 p-2 rounded-lg m-2"
            type="text"
            placeholder="Agregue descripción"
            required
          />
        </label>
        <label className="flex flex-col" Style="width:394px;" htmlFor="model">
          Precio
          <input
            Style="background-color:#dba47927;"
            name="model"
            className="bg-gray-50 border h-11 border-pro-100 p-2 rounded-lg m-2"
            type="number"
            placeholder="$ 0"
            required
          />
        </label>
        <label className="flex flex-col"  htmlFor="marca">
          Unidad de medida
          <select
            Style="background-color:#dba47927;"
            className="bg-gray-50 border h-11 border-pro-100 p-2 rounded-lg m-2"
            name="unit"
            required
            defaultValue={1}
          >
            <option disabled value={1}>
              Seleccione una opción
            </option>
            <option>gr</option>
            <option>kg</option>
            <option>bulto</option>
            <option>mL</option>
            <option>c.c.</option>
            <option>Litro</option>
            <option>galón</option>
          </select>
        </label>
        <label className="flex flex-col" Style="width:394px;" htmlFor="cantidad">
          Cantidad
          <input
            Style="background-color:#dba47927;"
            name="cantidad"
            className="bg-gray-50 border h-11 border-pro-100 p-2 rounded-lg m-2"
            type="number"
            placeholder="Cantidad"
            required
          />
        </label>

        <button
          type="submit"
          className="col-span-2 bg-pro-100 p-2 rounded-full shadow-md hover:bg-orange-400 text-white"
        >
          Guardar Articulo
        </button>
      </form>
    </div>
  );
};

export default Articulos;
