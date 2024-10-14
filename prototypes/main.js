function Vehicle(brand, model, maxSpeed) {
  this.brand = brand;
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.currentSpeed = 0;
}

Vehicle.prototype.accelerate = function (speed) {
  if ((this.currentSpeed += speed > this.maxSpeed)) {
    this.currentSpeed = this.maxSpeed;
  } else {
    this.currentSpeed += speed;
  }
  console.log(
    `${this.brand} ${this.model} accelerated and it is now going at ${this.currentSpeed} km/h.`
  );
};

Vehicle.prototype.decrease = function (speed) {
  if ((this.currentSpeed -= speed < 0)) {
    this.currentSpeed -= 0;
  } else {
    this.currentSpeed -= speed;
  }
  console.log(
    `${this.brand} ${this.model} speed decreased and it is now going at ${this.currentSpeed} km/h.`
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
  console.log(`Current Speed: ${this.currentSpeed}`);
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

Vehicle.prototype.jumpOf = function () {
  if (this.currentSpeed < 70) {
    console.log(`You jumped to ${this.currentSpeed} but just took a few hits`);
  } else if (this.currentSpeed === 70) {
    console.log(`You jumped at ${this.currentSpeed} but you might survive`);
  } else {
    console.log(`You jumped at ${this.currentSpeed} and now your are dead`);
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

Car.prototype.cleanWindshield = function () {
  return new Promise((resolve) => {
    console.log(`Cleaning ${this.brand} ${this.model} with windshield`);
    setTimeout(() => {
      console.log(`${this.brand} ${this.model} cleaned`);
      resolve();
    }, 3000);
  });
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

window.addEventListener("load", async () => {
  try {
    const car1 = new Car("Audi", "R8", 300, 4);
    const motorbike1 = new Motorbike(
      "Royal Enfield",
      "Custom Cruise",
      200,
      true
    );

    car1.showInfo();
    motorbike1.showInfo();

    car1.openDoors();
    motorbike1.showSideCar();

    await car1.cleanWindshield();

    car1.accelerate(80);
    motorbike1.accelerate(100);

    car1.jumpOf();

    car1.compareCurrentSpeed(motorbike1);
    car1.compareMaxSpeed(motorbike1);

    motorbike1.decrease(20);
    motorbike1.compareCurrentSpeed(car1);

    car1.decrease(20);

    motorbike1.stop();
    car1.stop();
  } catch (error) {
    console.error("Error", error);
  }
});
