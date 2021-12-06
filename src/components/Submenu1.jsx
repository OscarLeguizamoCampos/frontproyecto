import React from 'react'
import { Link } from 'react-router-dom'

const Submenu1 =({title1, subtitle1, subtitle2, ruta}) =>{
    return(
      <div className=" w-full fixed bg-orange-200 t-20 grid_12 z-30 border-bottom-black-tr" >
      <h1 className="headline marble headline">{title1}</h1>
      <div className="page-path headline ">
        <div id="crumbs" >
        <span typeof="v:Breadcrumb">
          <Link  to={ruta}>
            <a     className="text-sm"   property="v:title" href=" ">{subtitle1}</a>
          </Link>
        </span> 
        <span className="delimiter ">|</span> 
        <span className="current pr-4">{subtitle2}</span>
        </div>					
      </div>
    </div>
    )
  }

export default Submenu1
