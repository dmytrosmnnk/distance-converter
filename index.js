'use strict';

const inputField = document.getElementById('inputValue');
const resultField = document.getElementById('resultValue');
const inputTypeSelector = document.getElementById('inputType');
const resultTypeSelector = document.getElementById('resultType');

let inputValue = 0;
let inputType = inputTypeSelector.value;
let resultType = resultTypeSelector.value;

inputField.addEventListener('input', (e) => {
  inputValue = +e.target.value;
  resultField.value = getResult();
});

inputTypeSelector.addEventListener('change', (e) => {
  inputType = e.target.value;
  resultField.value = getResult();
});

resultTypeSelector.addEventListener('change', (e) => {
  resultType = e.target.value;
  resultField.value = getResult();
});

function getResult() {
  if (inputType === 'm') {
    switch (resultType) {
      case 'm':
        return inputValue;

      case 'cm':
        return inputValue * 100;

      case 'in':
        return inputValue * 39.37008;

      case 'ft':
        return inputValue * 3.28084;

      default:
        return;
    }
  }

  if (inputType === 'cm') {
    switch (resultType) {
      case 'm':
        return inputValue / 10;

      case 'cm':
        return inputValue;

      case 'in':
        return inputValue * 0.3937;

      case 'ft':
        return inputValue * 0.033;

      default:
        return;
    }
  }

  if (inputType === 'in') {
    switch (resultType) {
      case 'm':
        return inputValue * 0.0254;

      case 'cm':
        return inputValue * 2.54;

      case 'in':
        return inputValue;

      case 'ft':
        return inputValue / 12;

      default:
        return;
    }
  }

  if (inputType === 'ft') {
    switch (resultType) {
      case 'm':
        return inputValue * 0.305;

      case 'cm':
        return inputValue * 30.48;

      case 'in':
        return inputValue * 12;

      case 'ft':
        return inputValue;

      default:
        return;
    }
  }
};
