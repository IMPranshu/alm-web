const data = [
    { arg: 'No Risk', val: 30, parentID: '' },
    { arg: 'Low Risk', val: 49, parentID: '' },
    { arg: 'Medium Risk', val: 83, parentID: '' },
    { arg: 'High Risk', val: 23, parentID: '' },
    { arg: 'Critical', val: 33, parentID: '' },
    { arg: 'Nigeria', val: 18, parentID: 'Critical' },
    { arg: 'Egypt', val: 88, parentID: 'Critical' },
    { arg: 'Congo', val: 77, parentID: 'Critical' },
    { arg: 'Morocco', val: 33, parentID: 'Critical' },
    { arg: 'China', val: 13, parentID: 'High Risk' },
    { arg: 'India', val: 13, parentID: 'High Risk' },
    { arg: 'Pakistan', val: 19, parentID: 'High Risk' },
    { arg: 'Japan', val: 12, parentID: 'High Risk' },
    { arg: 'Russia', val: 14, parentID: 'No Risk' },
    { arg: 'Germany', val: 8, parentID: 'No Risk' },
    { arg: 'Turkey', val: 7, parentID: 'No Risk' },
    { arg: 'France', val: 6, parentID: 'No Risk' },
    { arg: 'United Kingdom', val: 6, parentID: 'No Risk' },
    { arg: 'United States', val: 32, parentID: 'Low Risk' },
    { arg: 'Mexico', val: 12, parentID: 'Low Risk' },
    { arg: 'Canada', val: 3, parentID: 'Low Risk' },
    { arg: 'Cuba', val: 1, parentID: 'Low Risk' },
    { arg: 'Brazil', val: 20, parentID: 'Medium Risk' },
    { arg: 'Colombia', val: 4, parentID: 'Medium Risk' },
    { arg: 'Venezuela', val: 3, parentID: 'Medium Risk' },
    { arg: 'Peru', val: 2, parentID: 'Medium Risk' },
    { arg: 'Chile', val: 1, parentID: 'Medium Risk' },
  ];
  
  export default {
    filterData(name) {
      return data.filter((item) => item.parentID === name);
    },
  };