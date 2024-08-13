// Bootcamp 2024
// Loops | Ejercicios básicos | While - Do While
// 1. Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola.
function sumUpToLimit(limitNum) {
  let cont = 0
  let sum = 0
  while (sum < limitNum) {
    sum = cont + 1 
    cont++
    console.log(sum);
  }
  return `sumuptolimit`;
}
console.log(sumUpToLimit(10));

// 2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola.
function countEven(n) {
  let i = 1;
  let even = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      even++;
    }
    i++;
  }
  return `Count even ${even}`;
}
console.log(countEven(10));

// 3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola.
function multiply(a, b) {
  let c = a;
  while (c != a * b) {
    c += a;
  }
  return c;
}
console.log(multiply(3, 6));

// 4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite.
function showOdds(limitNum) {
  let i = 1;
  let odd = 0;
  while (i < limitNum) {
    if (i % 2 !== 0) {
      odd++;
    }
    i++;
  }
  return `Count odds ${odd}`;
}
console.log(showOdds(10));

// 5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.
function calculateFactorial(n) {
  let i = n - 1;
  let result = n;
  while (i !== 1) {
    result *= i;
    i--;
  }
  return result;
}
console.log(calculateFactorial(4));

// 6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola.
function countDown(n) {
  console.log(n);
  do {
    n -= 1;
    console.log(n);
  } while (n > 1);
  return `Caboom`;
}
console.log(countDown(3));

// 7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola.
function sumDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumDigits(223));

// 8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.
function findUper(array) {
  let i = 0;
  let upper = array[0];
  while (i < array.length) {
    if (array[i] > array[i - 1]) {
      upper = array[i];
    }
    i++;
  }
  return `Upper is ${upper}`;
}
console.log(findUper([1, 3, 5, 6, 2]));

// 9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.
// 10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números pares desde 1 hasta 20.

function countAndShowOddsOrEvens(evenOrOdd) {
  let i = 0;
  let odds = 0;
  let evens = 0;
  console.log(evenOrOdd);
  do {
    i++;
    if (i % 2 == 0) {
      evens++;
    } else {
      odds++;
    }
    console.log(`Odds ${odds}, evens ${evens}`);
  } while (i < evenOrOdd);
  return `We have ${odds} odds and ${evens} evens`;
}
console.log(countAndShowOddsOrEvens(12));
