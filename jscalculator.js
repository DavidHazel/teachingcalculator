//JS for online calculator

//Cathy Starting

/*
 ResultDivID = the ID of the div you want to place your results value inside of
 val = the value you want to display
*/
function setResultsValue(ResultDivID, val) {

	var results = document.getElementById(ResultDivID);
	results.innerHTML = val;
	//console.log(results);
}
/*
	 ResultDivID = the ID of the div you want to get your results value from
	 @return returns the value stored in ResultDivID
*/
function getResultsValue(ResultDivID) {
	var val = document.getElementById(ResultDivID);
	return val.innerHTML;
}



/*
 Take value of TeamtotalPlayers input, multiply by 2 and push the result to TermTotalPossible (deonominator)
*/
function calcTermTotalPossible(){
	var a = document.getElementById('TeamTotalPlayers').value;
	var result = a * 2;
	setResultsValue('TermTotalPossible', result);
	//console.log("calcTermTotalPossible:" + result);
}


function calcTermTotalEarned(){
	var b = document.getElementById('EligibleSA').value;
	var c = document.getElementById('IneligibleSA').value;
	var d = document.getElementById('EligibleSANotReturning').value;
	var result = (b * 2) + (c * 1) + (d *1);
	setResultsValue('TermTotalEarned', result);
	//console.log("calcTermTotalEarned:" + result);
	
}

function calcTeamAPRproportion(){


	//var result = // TermTotalEarned divided by TermTotalPossible...can you getElementByID?
	var teamAPR = getResultsValue('TermTotalEarned') / getResultsValue('TermTotalPossible');
	setResultsValue('TeamAPRProportion', teamAPR);

}

function calcTeamAPRscore(){
	//var result = //TeamAPRProportion * 1000
	var teamAPRScore = getResultsValue('TeamAPRProportion') * 1000;
	setResultsValue('TeamAPRScore', teamAPRScore);

}


/*
Rerun all calcualtions, we do this becasue we have limited inputs and its easier just to recalc the page
*/
function runCalculations(){
	console.log("running calcs");
	calcTermTotalPossible();
	calcTermTotalEarned();
	calcTermTotalEarned();
	calcTeamAPRproportion();
	calcTeamAPRscore();
}


function onLoad(){
	document.getElementById('TeamTotalPlayers').onkeyup = runCalculations;
	document.getElementById('IneligibleSA').onkeyup = runCalculations;
	document.getElementById('EligibleSA').onkeyup = runCalculations;
	document.getElementById('EligibleSANotReturning').onkeyup = runCalculations;
	

	
	
}







