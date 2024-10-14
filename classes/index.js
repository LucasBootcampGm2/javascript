class Vehicle {
  constructor(brand, model, maxSpeed) {
    this.brand = brand;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = 0;
  }

  accelerate(speed) {
    this.currentSpeed += speed;
    if (this.currentSpeed > this.maxSpeed) {
      this.currentSpeed = this.maxSpeed;
    }
    console.log(
      `${this.brand} ${this.model} accelerated and is now going at ${this.currentSpeed} km/h.`
    );
  }

  decrease(speed) {
    this.currentSpeed -= speed;
    if (this.currentSpeed < 0) {
      this.currentSpeed = 0;
    }
    console.log(
      `${this.brand} ${this.model} slowed down and is now going at ${this.currentSpeed} km/h.`
    );
  }

  stop() {
    this.currentSpeed = 0;
    console.log(`${this.brand} ${this.model} has stopped.`);
  }

  showInfo() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Max Speed: ${this.maxSpeed}`);
    console.log(`Current Speed: ${this.currentSpeed}`);
  }

  compareMaxSpeed(otherVehicle) {
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
  }

  compareCurrentSpeed(otherVehicle) {
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
  }

  jumpOff() {
    if (this.currentSpeed < 70) {
      console.log(
        `You jumped at ${this.currentSpeed} km/h but only took a few hits.`
      );
    } else if (this.currentSpeed === 70) {
      console.log(`You jumped at ${this.currentSpeed} km/h but might survive.`);
    } else {
      console.log(
        `You jumped at ${this.currentSpeed} km/h and now you're dead.`
      );
    }
  }
}

class Car extends Vehicle {
  constructor(brand, model, maxSpeed, doors) {
    super(brand, model, maxSpeed);
    this.doors = doors;
  }

  openDoors() {
    console.log(`All ${this.doors} doors are open.`);
  }

  cleanWindshield() {
    return new Promise((resolve) => {
      console.log(`Cleaning ${this.brand} ${this.model} windshield...`);
      setTimeout(() => {
        console.log(`${this.brand} ${this.model} windshield cleaned.`);
        resolve();
      }, 3000);
    });
  }
}

class Motorbike extends Vehicle {
  constructor(brand, model, maxSpeed, sideCar) {
    super(brand, model, maxSpeed);
    this.sideCar = sideCar;
  }

  showSideCar() {
    if (this.sideCar) {
      console.log(`${this.brand} ${this.model} has a sidecar.`);
    } else {
      console.log(`${this.brand} ${this.model} does not have a sidecar.`);
    }
  }
}

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

    car1.jumpOff();

    car1.compareCurrentSpeed(motorbike1);
    car1.compareMaxSpeed(motorbike1);

    motorbike1.decrease(20);
    motorbike1.compareCurrentSpeed(car1);

    car1.decrease(20);

    motorbike1.stop();
    car1.stop();
  } catch (error) {
    console.error("Error:", error);
  }
});
