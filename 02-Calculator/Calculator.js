import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
    }
    window.calc = new Calculator();
            this.numPad = numPad;
            this.outputCalc = outputCalc;
            this.outputSolution = outputSolution;
            this.setupNumpad()

    setupNumPad() { 
        for(int element : this.numPad.children){
            element.addEventListener('click', this.onButtonClick.bind(this));
        }

      /* for (int i = 0; i>=9; i++){
            index.print(<button>i</button>)
      }
        }*/

    }

    onButtonClick(symbol) {
        this.printSolution(symbol);
        console.log(symbol);
    }

    print(string) {

    }

    printSolution(string) {

    }

    clear() {

    }

}
