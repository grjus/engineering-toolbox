const STRESS_UNIT = {
  ksi: 1,
  MPa: 0.145037737729544,
};

class UnitConversion {
  constructor(unit, unitValue) {
    this.unit = unit;
    this.unitValue = unitValue;
  }

  from(from) {
    this.unitValue *= this.unit[from];
    return this;
  }

  to(to) {
    this.unitValue /= this.unit[to];
    return this.unitValue;
  }
}

const convertUnit = (unitType, value) => new UnitConversion(unitType, value);

export { STRESS_UNIT, convertUnit };
