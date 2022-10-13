//1.- Importamos la libreria react
import React from "react";
//3.-importamos el css
import '../estilos-css/testimonio.css'

//2.-Creamos nuesttro componente

function Testimonio(props){
  //debe retornar un jsx con la estructura del componenete que queeremos
return(
      //contenedor principal
    <div className="contenedor-testimonio">
        
        <img alt="foto" className="imagen-testimonio" src={require(`../imagenes/${props.imagen}.png`)}/>
        <div className="contenedor-texto-testimonio">
              <p className="nombre-testimonio"> <strong>{props.nombre}</strong>  en {props.pais}</p>
              <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong> </p>
              <p className="texto-testimonio" >"{props.testimonio}"</p>

      </div>
    </div>
);
}

export default Testimonio
