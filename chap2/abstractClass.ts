namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  class MotorCycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
    showNumberOfWheels(): void {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  const motorCycle = new MotorCycle();
  motorCycle.updateWheelCount(1);
  const autoMobile = new Automobile();
  autoMobile.updateWheelCount(3);
}
