function gerarIdConsulta(consultas) {
  if (consultas.length === 0) {
    return 1;
  }
  return consultas[consultas.length - 1].id + 1;
}   
