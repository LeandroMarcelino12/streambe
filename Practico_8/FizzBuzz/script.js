function fizzBuzz2(palabra1, palabra2, limite, fizz_num, buzz_num) {
    let resultado = '';
    for (let i = 1; i <= limite; i++) {
        if (i % fizz_num === 0 && i % buzz_num === 0) {
            resultado += palabra1 + palabra2;
        } else if (i % fizz_num === 0) {
            resultado += palabra1;
        } else if (i % buzz_num === 0) {
            resultado += palabra2;
        } else {
            resultado += i;
        }
        if (i < limite) {
            resultado += ', ';
        }
    }
    return resultado;
}
let resultadoFizzBuzz = fizzBuzz2('Fizz', 'Buzz', 100, 3, 5);
console.log(resultadoFizzBuzz);


