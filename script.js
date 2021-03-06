
let savePerMonth = 0;
let intAmount = 0
let rate = 0;
let years = 0;
let sumOfSaving = 0;
let annualSevings = [];
let annualIntrestAr = [];
let annualIntrest = 0;


//Entry point
function StartCalculating(){
    //preper data and fields
    clearOutput();
    clearOldResults();
    getData(); 

    //App logic
    calculateResult();
}


//Preparing stage
function clearOutput() {
    document.getElementById("result_data").innerHTML = "";
    document.getElementById('annualSavings').innerHTML= "";
}

function clearOldResults() {
     savePerMonth = 0;
     intAmount = 0
     rate = 0;
     years = 0;
     sumOfSaving = 0;
     annualSevings = [];
     annualIntrestAr = [];
     annualIntrest = 0;
}

function getData() {
    intAmount = document.getElementById("initial_Amount").value;
    savePerMonth = document.getElementById("savings_per_month").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
}

//Calculate stage
function calculateResult() {
    sumOfSaving += parseInt(intAmount); 
    for (let i = 0; i < years; i++) {
        annualIntrestAr[i] = (savePerMonth * 12 + sumOfSaving) * (rate / 100);
        sumOfSaving +=  savePerMonth * 12 + annualIntrestAr[i];
        annualSevings[i] = sumOfSaving;

    }
    var msg = Math.round(sumOfSaving);
    document.getElementById("result_data").innerHTML += msg;
    
    printAnnualData();
}

function printAnnualData() {
    let annualData = document.getElementById("annualSavings");
    let msg = '';
    var roundedPrSv = formatNumbers(annualIntrestAr);
    var roundedSvAr = formatNumbers(annualSevings);

    for (let i = 0; i < annualSevings.length; i++) {
        
        let roundedAnnualIntrests = roundedPrSv[i].toLocaleString();
        let roundedAnnualSavings = roundedSvAr[i].toLocaleString();
       
        msg += (i + 1) + " : " + roundedAnnualSavings + ' included ' + roundedAnnualIntrests + ' intrests'  + " <br>";
    }
    annualData.innerHTML += msg;
    let yearsArray = [];
    
    yearsArray = []
        for(let i = 0; i<years; i++){
            yearsArray.push(i);
        }
    
    drawChart(roundedSvAr, roundedPrSv);
    }

function drawChart(annualSevings, yearsArray){
    let ctx = document.getElementById('savingChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearsArray,
            datasets : [{
              

                label: 'annual intrests',
                backgroundColor: 'rgb(0,191,255)',
                borderColor: 'rgb(255,255,255)',
                data: annualIntrestAr
            },
            {
                label: 'annual sevings',
                backgroundColor: 'rgb(144, 238,144)',
                borderColor: 'rgb(10,99,132)',
                data: annualSevings
            }]
        },
        options:{}
        
    });
}

function formatNumbers(oldArray){
var formatedArray=[];
for (let i = 0; i < oldArray.length; i++) {
    formatedArray[i] = Math.round(oldArray[i]);
}

return formatedArray;
}
