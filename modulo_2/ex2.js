const listaDeCarros = [
  {
    modelo: 'modelo B',
    ano: 2022,
    placa: 'abc1d20'
  },
  {
    modelo: 'modelo C',
    ano: 2010,
    placa: 'adc1d22'
  },
  {
    modelo: 'modelo D',
    ano: 2019,
    placa: 'ads1d23'
  },
  {
    modelo: 'modelo A',
    ano: 2021,
    placa: 'abc1d45'
  },
  {
    modelo: 't-cross',
    ano: 2022,
    placa: 'DFC3R48'
  }
];

const filtroDosCarros = dia => {
  const novaListaDeCarros = [];

  if (dia < 0 || dia > 6){
    console.error("Número do dia invalido!");
    return;
  }
  listaDeCarros.filter( carro => {
    switch (dia) {
      case 0:
        if (carro.placa.slice(-1) == 1 || carro.placa.slice(-1) == 2) {
          novaListaDeCarros.push(carro);          
        };
        break;
      case 1:
        if (carro.placa.slice(-1) == 3 || carro.placa.slice(-1) == 4) {
          novaListaDeCarros.push(carro);
        };
        break;
      case 2:
        if (carro.placa.slice(-1) == 5 || carro.placa.slice(-1) == 6) {
          novaListaDeCarros.push(carro);
        };
        break;
      case 3:
        if (carro.placa.slice(-1) == 7 || carro.placa.slice(-1) == 8) {
          novaListaDeCarros.push(carro);
        };
        break;
      case 4:
        if (carro.placa.slice(-1) == 9 || carro.placa.slice(-1) == 0) {
          novaListaDeCarros.push(carro);
        };
        break;
      default: 
        novaListaDeCarros.push(carro);
    }
  });
  console.log(novaListaDeCarros) 
}

let contador = 0;
let dias = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];

while (contador < dias.length) {

  console.log(`${dias[contador]}, os veículos de rodizio são:`);
  filtroDosCarros(contador);
  contador ++;
}




