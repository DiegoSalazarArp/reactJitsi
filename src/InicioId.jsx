import React, { useEffect } from "react";

export const InicioId = () => {
  let result = "";
  let urlCompleta = "";

  useEffect(() => {
    const url = window.location.href;
    const obtenerID = url.lastIndexOf("/");
    result = url.substring(obtenerID + 1);
    console.log(result)

  }, []);

  const irSala = () =>{
    window.location.replace("http://127.0.0.1:5173/" + result);

  }

  return (
    <div>
      <button className="btn btn-primary" onClick={irSala}>Ir a la Sala</button>
    </div>
  );
};
