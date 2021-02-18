const STRESS_UNIT = {
  ksi: 1,
  MPa: 6.89475908677537,
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
    this.unitValue /= this.unitValue[to];
    return this;
  }
}

const convertUnit = (unitType, value) => new UnitConversion(unitType, value);

export { STRESS_UNIT, convertUnit };
