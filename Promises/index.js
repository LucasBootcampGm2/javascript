// Ejercicio: Simulación de Descargas de Archivos
// Contexto:
// Estás desarrollando una aplicación para gestionar descargas de archivos. Cada archivo puede tardar un tiempo variable en descargarse debido a factores como el tamaño del archivo y la velocidad de la conexión. En algunos casos, las descargas pueden fallar debido a problemas de red. Tu tarea es simular estas descargas utilizando promesas y proporcionar diferentes tipos de reportes basados en las funciones Promise.all, Promise.allSettled, Promise.any, y Promise.race.
// Requerimientos:
// Implementa una clase llamada FileDownload, que simule la descarga de un archivo.
// Cada instancia de FileDownload tendrá un nombre y un tamaño (en MB). El tiempo de descarga será simulado usando setTimeout, y dependerá del tamaño del archivo.
// Usa las promesas Promise.all, Promise.allSettled, Promise.any, y Promise.race para generar diferentes resultados de las descargas.
// Tareas:
// Crear la clase FileDownload:
// La clase debe tener un constructor que acepte un nombre y un tamaño de archivo.
// Debe tener un método download() que simule la descarga del archivo, devolviendo una promesa que se resuelva cuando la descarga haya finalizado.

class FileDownload {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  download(random) {
    return new Promise((resolve, reject) => {
      console.log("Downloading file...");

      setTimeout(() => {
        if (random >= 3) {
          console.log(`Succesful download ${this.name}`);
          resolve(this.name);
        } else {
          console.log(`Failed download of ${this.name}`);

          reject(this.name);
        }
      }, this.size * 2);
    });
  }

  simulateNetworkIssues() {
    return Math.floor(Math.random() * 10);
  }
}

// Simular varias descargas:
// Instancia varios archivos y haz que empiecen la descarga al mismo tiempo.

const file1 = new FileDownload("File 1", 200);
const file2 = new FileDownload("File 2", 2000);
const file3 = new FileDownload("File 3", 1000);

// Implementa lo siguiente:
// Promise.all: Verifica cuánto tiempo toman todos los archivos en descargarse exitosamente.

const files = [file1, file2, file3];

Promise.all([
    file1.download(FileDownload.simulateNetworkIssues()),
    file2.download(FileDownload.simulateNetworkIssues()),
    file3.download(FileDownload.simulateNetworkIssues()),
  ])
  .then(() => {
    let time = 0;
    files.forEach((file) => {
      console.log(`${file.name} takes ${file.size * 2} to download`);
      time += file.size * 2;
    });
    console.log(`It takes ${time} for all files to download successfully.`);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// Promise.allSettled: Ve cuáles descargas se completaron y cuáles fallaron.

Promise.allSettled([
  file1.download(FileDownload.simulateNetworkIssues()),
  file2.download(FileDownload.simulateNetworkIssues()),
  file3.download(FileDownload.simulateNetworkIssues()),
]).then((result) => console.log(result));

// Promise.any: Muestra cuál archivo se descargó primero exitosamente.

Promise.any([
  file1.download(FileDownload.simulateNetworkIssues()),
  file2.download(FileDownload.simulateNetworkIssues()),
  file3.download(FileDownload.simulateNetworkIssues()),
]).then((result) => console.log(`${result} was the first file downloaded`));

// Promise.race: Muestra el primer archivo que terminó de descargarse o falló.

Promise.race([
  file1.download(FileDownload.simulateNetworkIssues()),
  file2.download(FileDownload.simulateNetworkIssues()),
  file3.download(FileDownload.simulateNetworkIssues()),
]).then((result) =>
  console.log(
    `${result} was the first file that finalize it download or fail it`
  )
);

// Simular fallos en las descargas:
// 	Simula que algunas descargas pueden fallar debido a problemas de conexión (rechazar la promesa).

// [
//     file1.download(FileDownload.simulateNetworkIssues()),
//     file2.download(FileDownload.simulateNetworkIssues()),
//     file3.download(FileDownload.simulateNetworkIssues()),
// ] I use FileDownload.simulateNetworkIssues() to return a random num that manage the promise

// Objetivo del ejercicio
// Practicar el uso de promesas en JavaScript, especialmente las funciones de promesas avanzadas.
// Entender las diferencias entre Promise.all, Promise.allSettled, Promise.any, y Promise.race.
// Crear y manipular clases.
// Simular condiciones reales (como tiempos de descarga variables y fallos) para trabajar con concurrencia en JavaScript.
