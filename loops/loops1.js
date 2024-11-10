// Bootcamp 2024
// Loops | Ejercicios básicos | While - Do While
// 1. Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola.
const sumUpToLimit = (limitNum) => {
  let count = 0;
  let sum = 0;
  while (sum < limitNum) {
    sum += count;
    count++;
  }
  return `Sum up to limit: ${sum}`;
};

const resultExcercise1 = sumUpToLimit(10);
console.log(resultExcercise1);

// 2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola.

const countEvenNums = (n) => {
  let evens = 0;
  let count = n;
  while (count > 0) {
    if (count % 2 === 0) {
      evens++;
      console.log(count);
    }
    count--;
  }
  return `There are ${evens} even nums between 1 and ${n}`;
};

const resultExcercise2 = countEvenNums(6);
console.log(resultExcercise2);

// 3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola.

const multiply = (a, b) => {
  const expectedResult = a * b;
  let result = 0;
  while (result < expectedResult) {
    result += b;
  }
  return `Result: ${result}`;
};

const resultExcercise3 = multiply(5, 5);
console.log(resultExcercise3);

// 4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite.

const showOdds = (limitNum) => {
  let count = 1;
  let odds = 0;

  while (count < limitNum) {
    if (count % 2 !== 0) {
      odds++;
      console.log(count);
    }
    count++;
  }

  return `There are ${odds} odds between 1 and ${limitNum}`;
};

const resultExcercise4 = showOdds(10);
console.log(resultExcercise4);

// 5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.

const calculateFactorial = (n) => {
  let count = n;
  let factorial = 1;

  while (count > 0) {
    factorial *= count;
    count--;
  }

  return `The factorial number of ${n} is ${factorial}`;
};

const resultExcercise5 = calculateFactorial(4);
console.log(resultExcercise5);

// // 6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola.

const countDown = (n) => {
  do {
    console.log(n);
    n--;
  } while (n >= 0);

  return `Time out!`;
};

const resultExcercise6 = countDown(10);
console.log(resultExcercise6);

// // 7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola.

const sumDigits = (n) => {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
};

const resultExcercise7 = sumDigits(213);
console.log(resultExcercise7);

// // 8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.

const findUper = (arrayOfNumbers) => {
  const arrayLength = arrayOfNumbers.length;
  let upperNum = 0;
  let count = 0;

  while (count < arrayLength) {
    if (arrayOfNumbers[count] > upperNum) {
      upperNum = arrayOfNumbers[count];
    }
    count++;
  }

  return `The uper num in this array of numbers is ${upperNum}`;
};

const resultExcercise8 = findUper([1, 52, 23, 3, 56]);
console.log(resultExcercise8);

// // 9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.
// // 10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números pares desde 1 hasta 20.

const countAndShowNumbers = (number) => {
  if (number % 2 === 0) {
    return countEvenNums(number);
  } else {
    return showOdds(number);
  }
};

const resultExcercise9and10 = countAndShowNumbers(9);
console.log(resultExcercise9and10);
