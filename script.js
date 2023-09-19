let number1 = prompt("Digite um número de sua escolha!");
let number2 = prompt("Digite outro número de sua escolha!");

number1 = Number(number1);
number2 = Number(number2);


function somar (num1, num2) {
  return num1 + num2;
}
function subtrair (numero1, numero2) {
  return numero1 - numero2;
}
function multiplicar (numero1, numero2) {
  return numero1 * numero2;
}
function dividir (numero1, numero2) {
  return numero1 / numero2;
}
function resto (numero1, numero2) {
  return numero1 % numero2;
}


alert(`O resultado da soma é ${somar(number1, number2)}`);
alert(`O resultado da subtração é ${subtrair(number1, number2)}`);
alert(`O resultado da multiplicação é ${multiplicar(number1, number2)}`);
alert(`O resultado da divisão é ${dividir(number1, number2)}`);
alert(`O resultado do resto é ${resto(number1, number2)}`);




if (somar % 2 === 0){
  alert(`A soma dos dois numeros é par: ${somar(number1, number2)}`)
} else {
  alert(`A soma dos dois numeros é impar: ${somar(number1, number2)}`)
}

