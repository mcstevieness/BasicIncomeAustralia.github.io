"use strict";

let newObjArray = [];
let svg = document.querySelector('svg');
let avgHouseholdSizeInAus = 2.6;
let distanceFromLeft = 20;
let distanceFromTop = 600;
let barwidth = 5;
let spaceWidth = 0;

let scaleTransform = 1;
let floorTransform = 0;
let taxationTransform = false;
let realisticTransform = false;
let removeTrap = false;
let flexPoint = 50;

// 
// function loadInitialArray() {
// 	newObjArray = [];

// 	let dataArray = [
// 		127.3 , 
// 		1105.2, 
// 		599.3 ,
// 		432.2 ,
// 		348.8 ,
// 		329.8 ,
// 		291.8 ,
// 		251.9 ,
// 		294.1 ,
// 		270.3 ,
// 		258.3 ,
// 		548.3 ,
// 		449.5 ,
// 		409.7 ,
// 		348.9 ,
// 		323.3 ,
// 		324.3 ,
// 		282.7 ,
// 		418.1 ,
// 		315.7 ,
// 		232.5 ,
// 		198.7 ,
// 		162.7 ,
// 		132.8 ,
// 		103.9 ,
// 		136.0 ,
// 		233.1 ,
// 		120.0 ,
// 		117.8 ,
// 		47.0 ,
// 		58.6 	   
// 	]
	
// 	let labelsArray = [
// 		"Less than $0",
// 		"$0 to less than $50,000",
// 		"$50,000 to less than $100,000",
// 		"$100,000 to less than $150,000",
// 		"$150,000 to less than $200,000",
// 		"$200,000 to less than $250,000",
// 		"$250,000 to less than $300,000",
// 		"$300,000 to less than $350,000",
// 		"$350,000 to less than $400,000",
// 		"$400,000 to less than $450,000",
// 		"$450,000 to less than $500,000",
// 		"$500,000 to less than $600,000",
// 		"$600,000 to less than $700,000",
// 		"$700,000 to less than $800,000",
// 		"$800,000 to less than $900,000",
// 		"$900,000 to less than $1,000,000",
// 		"$1,000,000 to less than $1,100,000",
// 		"$1,100,000 to less than $1,200,000",
// 		"$1,200,000 to less than $1,400,000",
// 		"$1,400,000 to less than $1,600,000",
// 		"$1,600,000 to less than $1,800,000",
// 		"$1,800,000 to less than $2,000,000",
// 		"$2,000,000 to less than $2,200,000",
// 		"$2,200,000 to less than $2,400,000",
// 		"$2,400,000 to less than $2,600,000",
// 		"$2,600,000 to less than $3,000,000",
// 		"$3,000,000 to less than $4,000,000",
// 		"$4,000,000 to less than $5,000,000",
// 		"$5,000,000 to less than $7,000,000",
// 		"$7,000,000 to $10,000,000",
// 		"More than $10,000,000"
// 	]
	
// 	let avgArray = [
// 		0,
// 		25000,
// 		75000,
// 		125000,
// 		175000,
// 		225000,
// 		275000,
// 		325000,
// 		375000,
// 		425000,
// 		475000,
// 		550000,
// 		650000,
// 		750000,
// 		850000,
// 		950000,
// 		1050000,
// 		1150000,
// 		1300000,
// 		1500000,
// 		1700000,
// 		1900000,
// 		2100000,
// 		2300000,
// 		2500000,
// 		2800000,
// 		3500000,
// 		4500000,
// 		6000000,
// 		9000000,
// 		40000000,
// 	]

// 	let objectsArray = [];
// 	let i = 0;

// 	dataArray.forEach((singleData)=>{
// 		let numberOfHouseholdsInBracket = dataArray[i]*1000;

// 		let newObj = {
// 			label: labelsArray[i],
// 			numberOfHouseholds: numberOfHouseholdsInBracket,
// 			avgWealthInThisBracket: avgArray[i],
// 			totalWealthHeldInThisBracket: avgArray[i]*numberOfHouseholdsInBracket
// 		} 
// 		objectsArray.push(newObj);		
		
// 		i++;
// 	})

// 	// console.log(JSON.parse(JSON.stringify(objectsArray)))

// 	let totalNumberOfHouseHolds = 0;
// 	objectsArray.forEach((singleObj)=>{
// 		totalNumberOfHouseHolds+=singleObj.numberOfHouseholds;
// 	})
	
// 	let numberOfHouseholdsInEachPercentile = Math.ceil(totalNumberOfHouseHolds/100);

// 	for (let j = 0; j < 100; j++) {
// 		let remainingToExtract = numberOfHouseholdsInEachPercentile;
// 		let totalWealthInPercentileToAdd = 0;
		
// 		while ((remainingToExtract > 0) && (objectsArray.length>0)) {
// 			// console.log("at beginning of loop remainingToExtract: ", remainingToExtract)
//             // console.log(objectsArray[0].numberOfHouseholds)
// 			if (objectsArray[0].numberOfHouseholds > remainingToExtract) {
// 				// console.log("pulling a portion out of objectsArray");
// 				let smallerNumber = remainingToExtract;
// 				objectsArray[0].numberOfHouseholds -= smallerNumber;
// 				remainingToExtract -= smallerNumber;
// 				totalWealthInPercentileToAdd += smallerNumber * objectsArray[0].avgWealthInThisBracket;
// 			} else {
// 				// console.log("pulling the final values out of objectsArray");
// 				let smallerNumber = objectsArray[0].numberOfHouseholds;
// 				remainingToExtract -= smallerNumber;
// 				totalWealthInPercentileToAdd += smallerNumber * objectsArray[0].avgWealthInThisBracket;
// 				objectsArray.shift();
// 			}
// 			// console.log("at end of loop remainingToExtract: ", remainingToExtract)
// 		}
// 		// console.log("end of while loop");
// 		let thisPercentile = {
// 			avgWealthPerPersonInPercentile: totalWealthInPercentileToAdd/numberOfHouseholdsInEachPercentile,
// 			totalWealthInPercentile: totalWealthInPercentileToAdd
// 		}
// 		newObjArray.push(thisPercentile);
// 	}
// 	// console.log(newObjArray);

// 	let totalOfLowest50 = 0;
// 	for (let i = 0; i < 50; i++) {
// 		totalOfLowest50+=newObjArray[i].totalWealthInPercentile;
// 	}
// 	// the richest 1% has as much wealth as the lowest 50%
// 	newObjArray[99].totalWealthInPercentile = totalOfLowest50;
// }

function loadInitialArray() {
	newObjArray = `[{"avgWealthPerPersonInPercentile":0,"totalWealthInPercentile":0},{"avgWealthPerPersonInPercentile":15678.450488536117,"totalWealthInPercentile":1453800000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":25000,"totalWealthInPercentile":2318150000},{"avgWealthPerPersonInPercentile":60407.54480943856,"totalWealthInPercentile":5601350000},{"avgWealthPerPersonInPercentile":75000,"totalWealthInPercentile":6954450000},{"avgWealthPerPersonInPercentile":75000,"totalWealthInPercentile":6954450000},{"avgWealthPerPersonInPercentile":75000,"totalWealthInPercentile":6954450000},{"avgWealthPerPersonInPercentile":75000,"totalWealthInPercentile":6954450000},{"avgWealthPerPersonInPercentile":75000,"totalWealthInPercentile":6954450000},{"avgWealthPerPersonInPercentile":87251.14854517611,"totalWealthInPercentile":8090450000},{"avgWealthPerPersonInPercentile":125000,"totalWealthInPercentile":11590750000},{"avgWealthPerPersonInPercentile":125000,"totalWealthInPercentile":11590750000},{"avgWealthPerPersonInPercentile":125000,"totalWealthInPercentile":11590750000},{"avgWealthPerPersonInPercentile":125000,"totalWealthInPercentile":11590750000},{"avgWealthPerPersonInPercentile":154198.93018139465,"totalWealthInPercentile":14298250000},{"avgWealthPerPersonInPercentile":175000,"totalWealthInPercentile":16227050000},{"avgWealthPerPersonInPercentile":175000,"totalWealthInPercentile":16227050000},{"avgWealthPerPersonInPercentile":175000,"totalWealthInPercentile":16227050000},{"avgWealthPerPersonInPercentile":216117.91730474733,"totalWealthInPercentile":20039750000},{"avgWealthPerPersonInPercentile":225000,"totalWealthInPercentile":20863350000},{"avgWealthPerPersonInPercentile":225000,"totalWealthInPercentile":20863350000},{"avgWealthPerPersonInPercentile":238282.14308823846,"totalWealthInPercentile":22094950000},{"avgWealthPerPersonInPercentile":275000,"totalWealthInPercentile":25499650000},{"avgWealthPerPersonInPercentile":275000,"totalWealthInPercentile":25499650000},{"avgWealthPerPersonInPercentile":280936.84619200655,"totalWealthInPercentile":26050150000},{"avgWealthPerPersonInPercentile":325000,"totalWealthInPercentile":30135950000},{"avgWealthPerPersonInPercentile":325000,"totalWealthInPercentile":30135950000},{"avgWealthPerPersonInPercentile":345106.5504820654,"totalWealthInPercentile":32000350000},{"avgWealthPerPersonInPercentile":375000,"totalWealthInPercentile":34772250000},{"avgWealthPerPersonInPercentile":375000,"totalWealthInPercentile":34772250000},{"avgWealthPerPersonInPercentile":386521.0404848694,"totalWealthInPercentile":35840550000},{"avgWealthPerPersonInPercentile":425000,"totalWealthInPercentile":39408550000},{"avgWealthPerPersonInPercentile":425000,"totalWealthInPercentile":39408550000},{"avgWealthPerPersonInPercentile":440769.0399672152,"totalWealthInPercentile":40870750000},{"avgWealthPerPersonInPercentile":475000,"totalWealthInPercentile":44044850000},{"avgWealthPerPersonInPercentile":475000,"totalWealthInPercentile":44044850000},{"avgWealthPerPersonInPercentile":514731.5747471044,"totalWealthInPercentile":47729000000},{"avgWealthPerPersonInPercentile":550000,"totalWealthInPercentile":50999300000},{"avgWealthPerPersonInPercentile":550000,"totalWealthInPercentile":50999300000},{"avgWealthPerPersonInPercentile":550000,"totalWealthInPercentile":50999300000},{"avgWealthPerPersonInPercentile":550000,"totalWealthInPercentile":50999300000},{"avgWealthPerPersonInPercentile":550000,"totalWealthInPercentile":50999300000},{"avgWealthPerPersonInPercentile":611663.3953799366,"totalWealthInPercentile":56717100000},{"avgWealthPerPersonInPercentile":650000,"totalWealthInPercentile":60271900000},{"avgWealthPerPersonInPercentile":650000,"totalWealthInPercentile":60271900000},{"avgWealthPerPersonInPercentile":650000,"totalWealthInPercentile":60271900000},{"avgWealthPerPersonInPercentile":650000,"totalWealthInPercentile":60271900000},{"avgWealthPerPersonInPercentile":726901.8398291741,"totalWealthInPercentile":67402700000},{"avgWealthPerPersonInPercentile":750000,"totalWealthInPercentile":69544500000},{"avgWealthPerPersonInPercentile":750000,"totalWealthInPercentile":69544500000},{"avgWealthPerPersonInPercentile":750000,"totalWealthInPercentile":69544500000},{"avgWealthPerPersonInPercentile":785062.4420335181,"totalWealthInPercentile":72795700000},{"avgWealthPerPersonInPercentile":850000,"totalWealthInPercentile":78817100000},{"avgWealthPerPersonInPercentile":850000,"totalWealthInPercentile":78817100000},{"avgWealthPerPersonInPercentile":850000,"totalWealthInPercentile":78817100000},{"avgWealthPerPersonInPercentile":908792.5716627483,"totalWealthInPercentile":84268700000},{"avgWealthPerPersonInPercentile":950000,"totalWealthInPercentile":88089700000},{"avgWealthPerPersonInPercentile":950000,"totalWealthInPercentile":88089700000},{"avgWealthPerPersonInPercentile":960130.9233656148,"totalWealthInPercentile":89029100000},{"avgWealthPerPersonInPercentile":1050000,"totalWealthInPercentile":97362300000},{"avgWealthPerPersonInPercentile":1050000,"totalWealthInPercentile":97362300000},{"avgWealthPerPersonInPercentile":1050000,"totalWealthInPercentile":97362300000},{"avgWealthPerPersonInPercentile":1110390.82889373,"totalWealthInPercentile":102962100000},{"avgWealthPerPersonInPercentile":1150000,"totalWealthInPercentile":106634900000},{"avgWealthPerPersonInPercentile":1150000,"totalWealthInPercentile":106634900000},{"avgWealthPerPersonInPercentile":1233271.142937256,"totalWealthInPercentile":114356300000},{"avgWealthPerPersonInPercentile":1300000,"totalWealthInPercentile":120543800000},{"avgWealthPerPersonInPercentile":1300000,"totalWealthInPercentile":120543800000},{"avgWealthPerPersonInPercentile":1300000,"totalWealthInPercentile":120543800000},{"avgWealthPerPersonInPercentile":1309231.499255872,"totalWealthInPercentile":121399800000},{"avgWealthPerPersonInPercentile":1500000,"totalWealthInPercentile":139089000000},{"avgWealthPerPersonInPercentile":1500000,"totalWealthInPercentile":139089000000},{"avgWealthPerPersonInPercentile":1500000,"totalWealthInPercentile":139089000000},{"avgWealthPerPersonInPercentile":1628300.5845178268,"totalWealthInPercentile":150985800000},{"avgWealthPerPersonInPercentile":1700000,"totalWealthInPercentile":157634200000},{"avgWealthPerPersonInPercentile":1726823.1132584172,"totalWealthInPercentile":160121400000},{"avgWealthPerPersonInPercentile":1900000,"totalWealthInPercentile":176179400000},{"avgWealthPerPersonInPercentile":1900000,"totalWealthInPercentile":176179400000},{"avgWealthPerPersonInPercentile":2098248.6034122035,"totalWealthInPercentile":194562200000},{"avgWealthPerPersonInPercentile":2147322.2181480923,"totalWealthInPercentile":199112600000},{"avgWealthPerPersonInPercentile":2300000,"totalWealthInPercentile":213269800000},{"avgWealthPerPersonInPercentile":2460886.9141341154,"totalWealthInPercentile":228188200000},{"avgWealthPerPersonInPercentile":2705178.6985311564,"totalWealthInPercentile":250840400000},{"avgWealthPerPersonInPercentile":2952069.538209348,"totalWealthInPercentile":273733600000},{"avgWealthPerPersonInPercentile":3500000,"totalWealthInPercentile":324541000000},{"avgWealthPerPersonInPercentile":3500000,"totalWealthInPercentile":324541000000},{"avgWealthPerPersonInPercentile":4203384.16409637,"totalWealthInPercentile":389763000000},{"avgWealthPerPersonInPercentile":5113873.131592003,"totalWealthInPercentile":474189000000},{"avgWealthPerPersonInPercentile":6416517.481612492,"totalWealthInPercentile":594978000000},{"avgWealthPerPersonInPercentile":28591053.210534263,"totalWealthInPercentile":951832500000}]`;
	newObjArray = JSON.parse(newObjArray);
}


function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function renderLineAndText(name,position,colour,scalingFactor) {
	let topLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	topLine.id = name + "line";  
	svg.append(topLine);
	let topLineHeight = distanceFromTop-(position/scalingFactor);
	topLine.setAttribute("x1",0+distanceFromLeft);
	topLine.setAttribute("x2",((100*barwidth)+distanceFromLeft));
	topLine.setAttribute("y1",topLineHeight);
	topLine.setAttribute("y2",topLineHeight);
	topLine.setAttribute("style",`stroke:${colour};stroke-width:1`);

	let topText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	topText.id = name + "text";  
	svg.append(topText);
	let topTextHeight = distanceFromTop-(position/scalingFactor)-9;
	if (name=="floor") {
		topText.setAttribute("x",distanceFromLeft+barwidth);
		topText.setAttribute("y",topTextHeight+29);
	} else {
		topText.setAttribute("x",distanceFromLeft+500+barwidth);
		topText.setAttribute("y",topTextHeight);
	}
	
	topText.setAttribute("style",`font-family: inter; fill: ${colour}; font-weight: 600;`);
	topText.innerHTML = "$" + numberWithCommas(Math.floor(position));

	SVGRect = topText.getBBox();
	var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", SVGRect.x-5);
    rect.setAttribute("y", SVGRect.y-5);
    rect.setAttribute("width", SVGRect.width+10);
    rect.setAttribute("height", SVGRect.height+10);
	rect.setAttribute("fill", "rgba(255, 255, 255, 1)");
	rect.setAttribute("stroke", `${colour}`);
    svg.insertBefore(rect, topText);
}

function calculateTaxationWithPovertyTrap(floorValue) {
	let totalNeedingToBeTaxed = 100*floorValue;
	let numberOfPercentilesThatNeedToBeTaxed = 0;

	newObjArray.forEach((currentObj)=>{
		if (currentObj.avgWealthPerPersonInPercentile > floorValue) {
			numberOfPercentilesThatNeedToBeTaxed++;
		}
	})

	let amountToTakeAwayFromHighEarners = totalNeedingToBeTaxed/numberOfPercentilesThatNeedToBeTaxed;

	newObjArray.forEach((currentObj)=>{
		currentObj.avgWealthPerPersonInPercentile-=amountToTakeAwayFromHighEarners;
	})
}

function lowIncomeGradient(x) {
	let lowIncomeGradationRate = 1.5;
	let exponential = x**lowIncomeGradationRate;
	let denominator = flexPoint**lowIncomeGradationRate;
	let multiplied = (-1)/(denominator);
	return (exponential*multiplied)+1;
}

function highIncomeGradient(x) {
	// console.log("input:"+x)
	// console.log("flexpoint:"+flexPoint);
	let highIncomeGradationRate = 150;
	// let highIncomeGradationRate = 1.5;
	let exponential = (x-flexPoint)**highIncomeGradationRate;
    // console.log("TCL: highIncomeGradient -> exponential", exponential)
	let denominator = (99-flexPoint)**highIncomeGradationRate;
    // console.log("TCL: highIncomeGradient -> denominator", denominator)
	let multiplied = 1/denominator;
    // console.log("TCL: highIncomeGradient -> multiplied", multiplied)
	// console.log("output:"+exponential*multiplied)
	return (exponential*multiplied);
}

function calculateTaxationWithoutPovertyTrap(floorValue) {
	let topPercentileRecipient = 0;
	// console.log(flexPoint);

	let i = 0;
	let totalAmountNeedingToBeTaxed = 0;
	let totalInGreenSection = 0;
	newObjArray.forEach((singleObj)=>{
		if (i < flexPoint) {
			let changeAmount = (lowIncomeGradient(i)*floorValue);
			singleObj.avgWealthPerPersonInPercentile += changeAmount;
			totalAmountNeedingToBeTaxed += changeAmount;
		} else if (i > flexPoint) {
			singleObj.avgWealthPerPersonInPercentile -= newObjArray[flexPoint].avgWealthPerPersonInPercentile;
			totalInGreenSection += singleObj.avgWealthPerPersonInPercentile;
		}
		
		i++;
	})


	i = 0
	newObjArray.forEach((currentObj)=>{
		if (i > flexPoint) {
			let fractionToTakeOut = totalAmountNeedingToBeTaxed*((currentObj.avgWealthPerPersonInPercentile)/(totalInGreenSection));
			let newWealth = currentObj.avgWealthPerPersonInPercentile - fractionToTakeOut;
			currentObj.avgWealthPerPersonInPercentile = newWealth + newObjArray[flexPoint].avgWealthPerPersonInPercentile;
		}
		i++
	})
}

function averagingFilter() {
	for (let i = 2; i < newObjArray.length-3; i++) {
		let newSum = newObjArray[i-2].avgWealthPerPersonInPercentile + newObjArray[i-1].avgWealthPerPersonInPercentile + newObjArray[i].avgWealthPerPersonInPercentile + newObjArray[i+1].avgWealthPerPersonInPercentile + newObjArray[i+2].avgWealthPerPersonInPercentile;
		newObjArray[i].avgWealthPerPersonInPercentile = newSum/5;
	}
}

function calculateSum() {
	let sum = 0;
	newObjArray.forEach((singleObj)=>{
		sum+=singleObj.avgWealthPerPersonInPercentile;
	})
	return sum;
}


function renderGraph() {
	svg.innerHTML = "";
	let maxHeight = 500;
	loadInitialArray();

	let scalingFactor = newObjArray[99].avgWealthPerPersonInPercentile/maxHeight;
	scalingFactor/=scaleTransform;
	let floorValue = floorTransform*scaleTransform*scalingFactor;

	// console.log("before: " + calculateSum());

	if (realisticTransform && taxationTransform) {
		if (removeTrap) {
			calculateTaxationWithoutPovertyTrap(floorValue);
		} else {
			calculateTaxationWithPovertyTrap(floorValue);
		}
	} 

	// console.log("after: " + calculateSum());

	newObjArray.sort(function(a, b) {
		return parseFloat(a.avgWealthPerPersonInPercentile) - parseFloat(b.avgWealthPerPersonInPercentile);
	});

	averagingFilter();

	// console.log("filtered: " + calculateSum());
	
	let i = 0;
	let povertyLineValue = 450*52*avgHouseholdSizeInAus;
	let averageWealthValue = 671421;

	// newObjArray.forEach((singleObj)=>{
	// 	let rectToAdd = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
	// 	rectToAdd.id = "rect_" + i;  
	// 	svg.append(rectToAdd);
	// 	let height = singleObj.avgWealthPerPersonInPercentile/scalingFactor;

	// 	rectToAdd.setAttribute("x", ((i*(barwidth+spaceWidth))+distanceFromLeft));
	// 	rectToAdd.setAttribute("y", distanceFromTop-height);
	// 	rectToAdd.setAttribute("width", barwidth);
	// 	rectToAdd.setAttribute("height", height);
	// 	rectToAdd.setAttribute("style","fill:var(--backgroundColour); ");
	// 	i++
	// })

	let pathToAdd = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	let pathString = `M ${distanceFromLeft} ${distanceFromTop-(floorTransform*scaleTransform)}`;
	
	newObjArray.forEach((singleObj)=>{
		let height = singleObj.avgWealthPerPersonInPercentile/scalingFactor;
	
		let xPosition = ((i*(barwidth+spaceWidth))+distanceFromLeft);
		let yPosition;
		if (realisticTransform) {
			if (singleObj.avgWealthPerPersonInPercentile < floorValue) {
				yPosition = distanceFromTop-floorValue/scalingFactor;
			} else {
				yPosition = distanceFromTop-height;
			}
		} else {
			yPosition = distanceFromTop-height-(floorTransform*scaleTransform);
		}
		
		pathString += ` L ${xPosition+(barwidth/2)} ${yPosition}`;
		i++
	})
	pathString += ` ${((100*(barwidth+spaceWidth))+distanceFromLeft)} ${distanceFromTop}`;
	pathString += ` ${distanceFromLeft} ${distanceFromTop} Z`;
	pathToAdd.id = "path";  
	svg.append(pathToAdd);
	pathToAdd.setAttribute("d", pathString);
	pathToAdd.setAttribute("fill", "var(--backgroundColour)");

	
	renderLineAndText("top",newObjArray[99].avgWealthPerPersonInPercentile,"var(--maxLine)",scalingFactor)

	renderLineAndText("almost",newObjArray[98].avgWealthPerPersonInPercentile,"var(--almostLine)",scalingFactor)

	renderLineAndText("nonaverage",averageWealthValue+2000000,"var(--nonAverageLine)",scalingFactor)

	if (scaleTransform>3.5) {
		renderLineAndText("average",averageWealthValue+1000000,"var(--averageLine)",scalingFactor)
	}

	renderLineAndText("poverty",povertyLineValue,"var(--povertyLine)",scalingFactor)

	renderLineAndText("floor",floorValue,"var(--floorLine)",scalingFactor)
}

function renderScale(rangeValue) {
	scaleTransform = rangeValue;
	renderGraph();
}

function renderFloor(floorValue) {
	floorTransform = floorValue
	renderGraph();
}

function renderFlex(flexValue) {
	flexPoint = Math.ceil(flexValue);
	renderGraph();
}


function init() {
	document.querySelector("#scalerRange").value = 1;
	document.querySelector("#floorRange").value = 0;

	let taxationBox = document.querySelector("#taxation");
	taxationBox.addEventListener('click',(e)=>{
		taxationTransform = taxationBox.checked;
		realisticTransform = taxationBox.checked;
		renderGraph();
	})

	let realisticBox = document.querySelector("#realistic");
	realisticBox.addEventListener('click',(e)=>{
		realisticTransform = realisticBox.checked;
		renderGraph();
	})

	let removeTrapBox = document.querySelector("#removeTrap");
	removeTrapBox.addEventListener('click',(e)=>{
		removeTrap = removeTrapBox.checked;
		renderGraph();
	})
	
	renderGraph();

}

document.addEventListener("DOMContentLoaded", init);