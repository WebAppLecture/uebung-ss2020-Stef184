import { Calculator } from './Calculator.js'
window.Calculator = Calculator; // fügt die Klasse zum globalen NameSpace hinzu
let numpad = document.querySelector(".numPad");
    outputCalc = document.querySelector(".outputCalc");
    outputSolution = document.querySelector(".outputSolution");
    
window.calc = new Calculator(numpad, outputCalc, outputSolution);
