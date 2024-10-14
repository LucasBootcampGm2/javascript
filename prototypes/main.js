// Ejercicio: Sistema de Vehículos
// Objetivo: Crear un sistema de clases para diferentes tipos de vehículos utilizando prototipos. Deben implementar una jerarquía de vehículos y añadir métodos a través de prototipos.
// Crear el prototipo base Vehículo:
// El constructor de Vehiculo debe recibir los siguientes parámetros:
// marca (string)
// modelo (string)
// velocidadMaxima (number)
// Métodos:
// acelerar(velocidad): Aumenta la velocidad del vehículo.
// detener(): Detiene el vehículo (velocidad = 0).
// mostrarInfo(): Muestra la información del vehículo (marca, modelo, velocidad máxima).
// 12:52
// Crear un prototipo Auto que herede de Vehiculo:
// El constructor de Auto debe recibir, además de los parámetros de Vehiculo, el número de puertas (puertas).
// Métodos:
// 	abrirPuertas(): Muestra un mensaje que indicEjercicio: Sistema de Vehículos
// Objetivo: Crear un sistema de clases para diferentes tipos de vehículos utilizando prototipos. Deben implementar una jerarquía de vehículos y añadir métodos a través de prototipos.
// Crear el prototipo base Vehículo:
// El constructor de Vehiculo debe recibir los siguientes parámetros:
// marca (string)
// modelo (string)
// velocidadMaxima (number)
// Métodos:
// acelerar(velocidad): Aumenta la velocidad del vehículo.
// detener(): Detiene el vehículo (velocidad = 0).
// mostrarInfo(): Muestra la información del vehículo (marca, modelo, velocidad máxima).
// 12:52
// Crear un prototipo Auto que herede de Vehiculo:
// El constructor de Auto debe recibir, además de los parámetros de Vehiculo, el número de puertas (puertas).
// Métodos:
// 	abrirPuertas(): Muestra un mensaje que indica que las puertas están abiertas.
// Crear un prototipo Moto que herede de Vehiculo:
// El constructor de Moto debe recibir, además de los parámetros de Vehiculo, si tiene o no sidecar (sidecar).
// Métodos:
// 	mostrarSidecar(): Muestra si la moto tiene o no sidecar.
// Pruebas:
// Instanciar varios objetos de Auto y Moto, mostrar su información y utilizar los métodos heredados.
// Hacer que los vehículos "aceleren" y "detengan".
// Implementar un método compararVelocidad(otroVehiculo) en Vehiculo que compare la velocidad máxima entre dos vehículos y devuelva cuál es más rápido.
// Commitear y subir a github. La prolijidad de los commits será evaluada.a que las puertas están abiertas.
// Crear un prototipo Moto que herede de Vehiculo:
// El constructor de Moto debe recibir, además de los parámetros de Vehiculo, si tiene o no sidecar (sidecar).
// Métodos:
// 	mostrarSidecar(): Muestra si la moto tiene o no sidecar.
// Pruebas:
// Instanciar varios objetos de Auto y Moto, mostrar su información y utilizar los métodos heredados.
// Hacer que los vehículos "aceleren" y "detengan".
// Implementar un método compararVelocidad(otroVehiculo) en Vehiculo que compare la velocidad máxima entre dos vehículos y devuelva cuál es más rápido.
// Commitear y subir a github. La prolijidad de los commits será evaluada.

function Vehicle(brand, model, maxSpeed) {
  this.brand = brand;
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.currentSpeed = 0;
}

Vehicle.prototype.accelerate = function (speed) {
  this.currentSpeed += speed;
  console.log(
    `The ${this.brand} ${this.model} is now going at ${this.currentSpeed} km/h.`
  );
};

Vehicle.prototype.stop = function () {
  this.currentSpeed = 0;
  console.log(`${this.brand} ${this.model} has stopped.`);
};

Vehicle.prototype.showInfo = function () {
  console.log(`Brand: ${this.brand}`);
  console.log(`Model: ${this.model}`);
  console.log(`Max Speed: ${this.maxSpeed}`);
};

Vehicle.prototype.compareMaxSpeed = function (otherVehicle) {
  if (this.maxSpeed > otherVehicle.maxSpeed) {
    console.log(
      `${this.brand} ${this.model} is faster than ${otherVehicle.brand} ${otherVehicle.model}.`
    );
  } else if (this.maxSpeed < otherVehicle.maxSpeed) {
    console.log(
      `${otherVehicle.brand} ${otherVehicle.model} is faster than ${this.brand} ${this.model}.`
    );
  } else {
    console.log(
      `${this.brand} ${this.model} and ${otherVehicle.brand} ${otherVehicle.model} have the same max speed.`
    );
  }
};

Vehicle.prototype.compareCurrentSpeed = function (otherVehicle) {
  if (this.currentSpeed > otherVehicle.currentSpeed) {
    console.log(
      `${this.brand} ${this.model} is going faster than ${otherVehicle.brand} ${otherVehicle.model}.`
    );
  } else if (this.currentSpeed < otherVehicle.currentSpeed) {
    console.log(
      `${otherVehicle.brand} ${otherVehicle.model} is going faster than ${this.brand} ${this.model}.`
    );
  } else {
    console.log(
      `${this.brand} ${this.model} and ${otherVehicle.brand} ${otherVehicle.model} have the same current speed.`
    );
  }
};

function Car(brand, model, maxSpeed, doors) {
  Vehicle.call(this, brand, model, maxSpeed);
  this.doors = doors;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.openDoors = function () {
  console.log(`All ${this.doors} doors are open.`);
};

function Motorbike(brand, model, maxSpeed, sideCar) {
  Vehicle.call(this, brand, model, maxSpeed);
  this.sideCar = sideCar;
}

Object.setPrototypeOf(Motorbike.prototype, Vehicle.prototype);

Motorbike.prototype.showSideCar = function () {
  if (this.sideCar) {
    console.log(`${this.brand} ${this.model} has a sidecar.`);
  } else {
    console.log(`${this.brand} ${this.model} does not have a sidecar.`);
  }
};

const car1 = new Car("Audi", "R8", 300, 4);
const motorbike1 = new Motorbike("Royal Enfield", "Custom Cruise", 200, true);

car1.showInfo();
motorbike1.showInfo();

car1.openDoors();
motorbike1.showSideCar();

car1.accelerate(80);
motorbike1.accelerate(100);

car1.compareCurrentSpeed(motorbike1);
car1.compareMaxSpeed(motorbike1);
motorbike1.stop();
car1.stop();

// preguntar porque no funciona con el setPrototypeOf, cual es la diferencia??
