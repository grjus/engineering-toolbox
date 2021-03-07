export const unitSystemItems = [
  {
    value: 'ksi',
    name: 'ksi',
  },
  {
    value: 'MPa',
    name: 'MPa',
  },

];

export const resultsInit = {
  Neuber: {
    Stress: 'n/a',
    TotalStrain: 'n/a',
    ElasticStrain: 'n/a',
    PlasticStrain: 'n/a',
    ResidualStress: 'n/a',
  },
  Glinka: {
    Stress: 'n/a',
    TotalStrain: 'n/a',
    ElasticStrain: 'n/a',
    PlasticStrain: 'n/a',
    ResidualStress: 'n/a',
  },
  XYData: {
    RambergOsgood: {
      Strain: [
        0,
        0,
        0,
        0,

      ],
      Stress: [
        0,
        0,
        0,
        0,

      ],
    },
    NeuberHyperbola: {
      Stress: [
        0,
        0,
        0,
        0,

      ],
      Strain: [
        0,
        0,
        0,
        0,

      ],
    },
  },
};
