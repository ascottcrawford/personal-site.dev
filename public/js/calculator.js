'use-strict';


var buttonOne = document.getElementById('one');
var buttonTwo = document.getElementById('two');
var buttonThree = document.getElementById('three');
var buttonFour = document.getElementById('four');
var buttonFive = document.getElementById('five');
var buttonSix = document.getElementById('six');
var buttonSeven = document.getElementById('seven');
var buttonEight = document.getElementById('eight');
var buttonNine = document.getElementById('nine');
var buttonZero = document.getElementById('zero');

var buttonPlus = document.getElementById('plus');
var buttonMinus = document.getElementById('minus');
var buttonMultiply = document.getElementById('multiply');
var buttonClear = document.getElementById('clear');
var buttonEquals = document.getElementById('equals');
var buttonDivide = document.getElementById('divide');
var buttonDecimal = document.getElementById('decimal');
var buttonPosNeg = document.getElementById('posneg');
var buttonPercent = document.getElementById('percent');
var buttonSqRoot = document.getElementById('sqroot');
var buttonPower = document.getElementById('power');

var actionField = document.getElementById('action-field'); 

buttonOne.addEventListener('click', enterFirstNumber, false);
buttonTwo.addEventListener('click', enterFirstNumber, false);
buttonThree.addEventListener('click', enterFirstNumber, false);
buttonFour.addEventListener('click', enterFirstNumber, false);
buttonFive.addEventListener('click', enterFirstNumber, false);
buttonSix.addEventListener('click', enterFirstNumber, false);
buttonSeven.addEventListener('click', enterFirstNumber, false);
buttonEight.addEventListener('click', enterFirstNumber, false);
buttonNine.addEventListener('click', enterFirstNumber, false);
buttonZero.addEventListener('click', enterFirstNumber, false);
buttonDecimal.addEventListener('click', enterFirstNumber, false);

buttonPlus.addEventListener('click', enterOperator, false);
buttonMinus.addEventListener('click', enterOperator, false);
buttonMultiply.addEventListener('click', enterOperator, false);
buttonDivide.addEventListener('click', enterOperator, false);

buttonClear.addEventListener('click', enterClear, false);
buttonPosNeg.addEventListener('click', convertPosNeg, false);
buttonPercent.addEventListener('click', convertPercent, false);
buttonSqRoot.addEventListener('click', convertSqRoot, false);
buttonPower.addEventListener('click', enterOperator, false);

	function enterFirstNumber() {
		var displayFirstNumber = this.getAttribute('data-value');

		if (actionField.value !== "") { 
			document.getElementById('right-field').value += displayFirstNumber;
		} else {
			document.getElementById('left-field').value += displayFirstNumber;
		}
	}

	function convertPosNeg (){
		
		if (actionField.value !== "") { 
			document.getElementById('right-field').value *= (-1);
		} else {
			document.getElementById('left-field').value *= (-1);
	}
}

	function convertPercent (){
		
		if (actionField.value !== "") { 
			document.getElementById('right-field').value *= (.01);
		} else {
			document.getElementById('left-field').value *= (.01);
	}
}
	
	function convertSqRoot (){
		
		if (actionField.value !== "") { 
			document.getElementById('right-field').value = Math.sqrt(document.getElementById('right-field').value);
		} else {
			document.getElementById('left-field').value = Math.sqrt(document.getElementById('left-field').value);
	}
}



	function enterOperator () {
		var displayOperator = this.getAttribute('data-value');
		document.getElementById('action-field').value += displayOperator;		
	}


	var resultField = document.getElementById("result-field");
	buttonEquals.addEventListener('click', function () {
		var x = Number(document.getElementById('left-field').value); 
		var y = Number(document.getElementById('right-field').value);
		
		if (actionField.value === "+") {
			console.log(x);
			console.log(y);
			resultField.value = addition(x, y);
		} else if (actionField.value === "-") {
			subtraction(x, y);
			resultField.value = subtraction(x, y);
		}	else if (actionField.value === "*") {
			multiply(x, y);
			resultField.value = multiply(x, y);
		} else if (actionField.value === "/") {
			divide(x, y);
			resultField.value = divide(x, y);
		} else {
			convertPower(x, y);
			resultField.value = convertPower(x, y);
		}

	}, false);

	function enterClear (){
		document.getElementById('left-field').value = "";
		document.getElementById('right-field').value = "";
		document.getElementById('action-field').value = "";
		document.getElementById('result-field').value = "";
	}

	function addition(value1, value2) {
		var sum = (value1 + value2); 
		return sum;
	}

	function subtraction(value1, value2) {
		var difference = (value1-value2);
		return difference;
	}

	function multiply(value1, value2) {
		var product = (value1*value2);
		return product;
	}

	function divide(value1, value2) {
		var divided = (value1/value2);
		return divided;
	}

	function convertPower (value1, value2){
			var power = Math.pow(value1, value2)
			return power;
			
		// 	if (actionField.value !== "") { 
		// 		document.getElementById('right-field').value = Math.sqrt(document.getElementById('right-field').value);
		// 	} else {
		// 		document.getElementById('left-field').value = Math.sqrt(document.getElementById('left-field').value);
		// }
	}






// buttonOne.addEventListener('click', enterSecondNumber, false);
// buttonTwo.addEventListener('click', enterSecondNumber, false);
// buttonThree.addEventListener('click', enterSecondNumber, false);
// buttonFour.addEventListener('click', enterSecondNumber, false);
// buttonFive.addEventListener('click', enterSecondNumber, false);
// buttonSix.addEventListener('click', enterSecondNumber, false);
// buttonSeven.addEventListener('click', enterSecondNumber, false);
// buttonEight.addEventListener('click', enterSecondNumber, false);
// buttonNine.addEventListener('click', enterSecondNumber, false);
// buttonZero.addEventListener('click', enterSecondNumber, false);



