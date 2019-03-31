
let savePerM = 0;
let intAmount = 0
let rate = 0;
let years = 0;
let sumOfSaving = 0;
let annualSevings = [];
let annualIntrest = [];
let montlyIntres = 0;

//Entry point
function StartCalculating(){
    clearOutput();
    clearOldResults();
    
    getData();
    
    calculateResult();
}

function clearOutput() {
    document.getElementById("result_data").innerHTML = "";
    document.getElementById('montlySavings').innerHTML="";
}

function clearOldResults() {
    savePerM = 0;
    rate = 0;
    years = 0;
    sumOfSaving = 0;
    montlyIntres = 0;
}

function calculateResult() {
    sumOfSaving += parseInt(intAmount); 
    for (let i = 0; i < years; i++) {
        annualIntrest[i] = (savePerM * 12 + sumOfSaving) * (rate / 100);
        sumOfSaving +=  savePerM * 12 + annualIntrest[i];
        annualSevings[i] = sumOfSaving;

    }
    var msg = Math.round(sumOfSaving);
    document.getElementById("result_data").innerHTML += msg;
    
    printMontlyData();
}

function getData() {
    intAmount = document.getElementById("intAmt").value;
    savePerM = document.getElementById("svPM").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
}





function printMontlyData() {
    let montlyData = document.getElementById("montlySavings");
    let msg = '';
    var roundedPrSv;
    var roundedSvAr;
    for (let i = 0; i < annualSevings.length; i++) {
        roundedSvAr = Math.round(annualSevings[i]);
        roundedSvAr = roundedSvAr.toLocaleString();

        roundedPrSv = Math.round(annualIntrest[i]);
        roundedPrSv = roundedPrSv.toLocaleString();

        msg += (i + 1) + " : " + roundedSvAr + ' included ' + roundedPrSv + ' intrests'  + " <br>";
    }
    montlyData.innerHTML += msg;
    drawChart(annualSevings);

}
function drawChart(svArray){
    let ctx = document.getElementById('savingChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels:[1,2,3,4,5,6,7,8,9,10,11,12],
            datasets : [{
                label: 'My sevings',
                backgroundColor: 'rgb(144, 238,144)',
                borderColor: 'rgb(10,99,132)',
                data: svArray
            }]
        },
        options:{}
        
    });
}

function sumOfIntrests(){
    let msg;
    let sumOfIntr=0;
    for(var i = 0; i< annualIntrest.length; i++ ){
        sumOfIntr+= annualIntrest[i];
    } 


}