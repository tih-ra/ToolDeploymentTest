const projectCalcInitialMock = [
  {
    title: 'Production parameters',
    items: [
      {
        title: 'Capacity, pcs/y',
        suffix: '',
        defaultValue: 12000,
        step: 1
      },
      {
        title: 'Amortisation time',
        suffix: 'years',
        defaultValue: 5,
        step: 1
      },
      {
        title: 'Capacity safety factor',
        suffix: '%',
        defaultValue: 10,
        step: 1
      },
      {
        title: 'Usable production area',
        suffix: 'm2',
        defaultValue: 1700,
        step: 1
      }
    ]
  },
  {
    title: 'Robotic production',
    items: [
      {
        title: 'Daily runtime',
        suffix: 'h',
        defaultValue: 20,
        step: 1
      },
      {
        title: 'Operational days',
        suffix: ' d/y',
        defaultValue: 246,
        step: 1
      },
      {
        title: 'Equipment availability',
        suffix: '%',
        defaultValue: 96,
        step: 1
      },
      {
        title: 'Scrap rate',
        suffix: '%',
        defaultValue: 0.5,
        step: 0.1
      }
    ]
  },
  {
    title: 'Workforce',
    items: [
      {
        title: 'Shifts / day',
        suffix: '',
        defaultValue: 3,
        step: 1
      }
    ]
  }
];

export default projectCalcInitialMock;
