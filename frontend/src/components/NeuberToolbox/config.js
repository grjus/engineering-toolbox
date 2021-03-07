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
  UnitSystem: 'ksi',
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

export const chartOptions = {
  type: 'scatter',
  bezierCurve: true,
  options: {
    maintainAspectRatio: false,
    responsive: false,
    title: {
      display: true,
      text: 'Stress correction results',
      fontColor: 'black',
      fontSize: 20,

    },
    scales: {
      xAxes: [{
        display: true,
        type: 'linear',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Strain',
          fontSize: 18,
          fontColor: 'black',
        },
        ticks: {
          max: 0.1,
          fontSize: 18,
          fontColor: 'black',
        },

      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Stress',
          fontSize: 18,
          fontColor: 'black',
        },
        ticks: {
          min: 0,
          // stepSize: 10,
          fontSize: 18,
          fontColor: 'black',
        },
      }],
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      fontSize: 18,
      fontColor: 'black',

    },
  },

};
