const listaDeCarros = [
  {
    modelo: 'modelo B',
    ano: 2022,
    placa: 'abc1d23'
  },
  {
    modelo: 'modelo C',
    ano: 2010,
    placa: 'adc1d23'
  },
  {
    modelo: 'modelo D',
    ano: 2019,
    placa: 'ads1d23'
  },
  {
    modelo: 'modelo A',
    ano: 2021,
    placa: 'abc1d43'
  }
];

listaDeCarros.push({
  modelo: 't-cross',
  ano: 2022,
  placa: 'DFC3R43'
});

listaDeCarros.sort( (carro1, carro2) => {
  return carro1.modelo < carro2.modelo ? -1 : true;
})

console.log(listaDeCarros);