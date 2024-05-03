let nomeHeroi = 'Vanluc';
let exp = 9750;
let nivel = [
  'Ferro',
  'Bronze',
  'Prata',
  'Ouro',
  'Platina',
  'Ascendente',
  'Imortal',
  'Radiante',
];

console.log(
  'Olá aventureiro. Estou aqui para lhe informar a classificação do nível do seu herói.'
);

if (exp <= 1000) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[0]);
} else if (exp > 1000 && exp <= 2000) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[1]);
} else if (exp > 2000 && exp <= 5000) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[2]);
} else if (exp > 5000 && exp <= 7000) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[3]);
} else if (exp > 7000 && exp <= 8000) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[4]);
} else if (exp > 8000 && exp <= 9000) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[5]);
} else if (exp > 9000 && exp <= 10000) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[6]);
} else if (exp >= 10001) {
  console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel[7]);
}
