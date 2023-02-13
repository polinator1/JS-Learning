const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumuliticeCalculation


function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumuliticeCalculation) 
    } else {
        calculation.push(value)
        accumuliticeCalculation = calculation.join('')
        screenDisplay.textContent = accumuliticeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))