import React from 'react'
import { Link } from 'react-router-dom'

const Submenu2 =({title1, subtitle1, subtitle2, subtitle3, ruta1, ruta2}) =>{
    return(
      <div className=" w-full fixed z-30 bg-orange-200 t-20 grid_12 border-bottom-black-tr" >
      <h1 className="headline marble headline">{title1}</h1>
      <div className="page-path headline ">
        <div id="crumbs" >
        <span typeof="v:Breadcrumb">
          <Link  to={ruta1}>
            <a     className="text-sm"   property="v:title" href=" ">{subtitle1}</a>
          </Link>
        </span> 
        <span className="delimiter ">|</span> 
        <span typeof="v:Breadcrumb">
          <Link  to={ruta2}>
            <a     className="text-sm"   property="v:title" href=" ">{subtitle2}</a>
          </Link>
        </span> 
        <span className="delimiter ">|</span> 
        <span className="current  pr-4">{subtitle3}</span>
        </div>					
      </div>
    </div>
    )
  }

export default Submenu2
