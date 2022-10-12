import React from "react";

const Alumno = () => {
  const alumnos = [
    ["Kevin", 189573],
    ["Luis", 189578],
    ["Juan", 189567],
  ];
  return (
    <>
      <h1>Lista de alumnos</h1>
      <ul>
        {alumnos.map((nombre, i) => {
          return (
            <li>
              {nombre.map((matricula, sIndex) => {
                return <p> {matricula} </p>;
              })}
            </li>
          );
        })}
      
      </ul>
    </>
  );
};

export default Alumno;
