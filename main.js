'use script';




const convertTemp = function (temp, convertTo) {
  let toUnit = convertTo ?? 'F';
  let tempToConvert = Number(temp) ?? 0;

  if (toUnit === 'F') {
    let fahrenheit = (tempToConvert * 9) / 5 + 32;
    return `${fahrenheit}\u{00B0}F`;
  } else if (toUnit === 'C') { 
    let celsius = ((tempToConvert - 32) * 5) / 9;
    return `${celsius}\u{00B0}C`;
  } else {
    return `Enter valid units like 'C' or 'F'`
  }
};

let today = 95;
console.log(convertTemp(today, 'F'));