function generarTextoFecha(fechaInicio, fechaFin) {
  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);

  if (isNaN(inicio) || isNaN(fin)) {
    return "Alguna de las fechas es inválida.";
  }

  const diaInicio = inicio.getDate();
  const diaFin = fin.getDate();

  const mesInicio = inicio.toLocaleDateString("es-ES", { month: "long" });
  const mesFin = fin.toLocaleDateString("es-ES", { month: "long" });

  const añoInicio = inicio.getFullYear();
  const añoFin = fin.getFullYear();

  const mismoMes = inicio.getMonth() === fin.getMonth() && añoInicio === añoFin;

  const mismoAño = añoInicio === añoFin;

  let mensaje;

  if (mismoMes) {
    mensaje = `Del ${diaInicio} al ${diaFin} de ${mesInicio}`;
  } else {
    mensaje = `Del ${diaInicio} de ${mesInicio} al ${diaFin} de ${mesFin}`;
  }

  if (mismoAño) {
    mensaje += ` de ${añoInicio}`;
  } else {
    mensaje += ` de ${añoInicio} al ${añoFin}`;
  }

  return mensaje;
}

export default generarTextoFecha;