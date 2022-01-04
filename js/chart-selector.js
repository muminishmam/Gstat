// Dynamically updates the dataset for the chart object rendered
const weekLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51',
    '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103',
    '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129']
const monthLabels = [
    'Jan \'19', 'Feb\'19', 'Mar \'19', 'Apr \'19', 'May \'19', 'Jun \'19', 'Jul\'19', 'Aug \'19', 'Sep \'19', 'Oct \'19', 'Nov \'19', 'Dec \'19',
    'Jan \'20', 'Feb \'20', 'Mar \'20', 'Apr \'20', 'May \'20', 'Jun \'20', 'Jul \'20', 'Aug \'20', 'Sep \'20', 'Oct \'20', 'Nov \'20', 'Dec \'20',
    'Jan \'21', 'Feb \'21', 'Mar \'21', 'Apr \'21', 'May \'21', 'Jun \'21']
const yearLabels = ['2019', '2020', '2021'];

// Playtime Data
const ptWeekData = JSON.parse(localStorage.getItem('playtimeData'));
const ptMonthData = new Array(Math.ceil(ptWeekData.length / 4));
const ptYearData = new Array(Math.ceil(ptMonthData.length / 12));

const ptWeekData2 = JSON.parse(localStorage.getItem('playtimeData2'));
const ptMonthData2 = new Array(Math.ceil(ptWeekData2.length / 4));
const ptYearData2 = new Array(Math.ceil(ptMonthData2.length / 12));

const ptWeekData3 = JSON.parse(localStorage.getItem('playtimeData3'));
const ptMonthData3 = new Array(Math.ceil(ptWeekData3.length / 4));
const ptYearData3 = new Array(Math.ceil(ptMonthData3.length / 12));

const ptWeekData4 = JSON.parse(localStorage.getItem('playtimeData4'));
const ptMonthData4 = new Array(Math.ceil(ptWeekData4.length / 4));
const ptYearData4 = new Array(Math.ceil(ptMonthData4.length / 12));

// Calculate month/Yearly values for 4 playtime datasets
if (localStorage.getItem('playtimeData') != null) {
    //Occupying Month and Year with 0's for calculation
    for (let i = 0; i < ptMonthData.length; i++) {
        ptMonthData[i] = 0
    }
    for (let i = 0; i < ptYearData.length; i++) {
        ptYearData[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (let i = 0; i < ptWeekData.length; i++) {
        const monthPeriod = Math.floor(i / 4)
        ptMonthData[monthPeriod] += ptWeekData[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (let i = 0; i < ptMonthData.length; i++) {
        const yearPeriod = Math.floor(i / 12)
        ptYearData[yearPeriod] += ptMonthData[i]
    }
}

// playtime dataset2
if (localStorage.getItem('playtimeData2') != null) {
    //Occupying Month and Year with 0's for calculation
    for (let i = 0; i < ptMonthData2.length; i++) {
        ptMonthData2[i] = 0
    }
    for (let i = 0; i < ptYearData2.length; i++) {
        ptYearData2[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (let i = 0; i < ptWeekData2.length; i++) {
        const monthPeriod = Math.floor(i / 4)
        ptMonthData2[monthPeriod] += ptWeekData2[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (let i = 0; i < ptMonthData2.length; i++) {
        const yearPeriod = Math.floor(i / 12)
        ptYearData2[yearPeriod] += ptMonthData2[i]
    }
}

// playtime dataset3
if (localStorage.getItem('playtimeData3') != null) {
    //Occupying Month and Year with 0's for calculation
    for (let i = 0; i < ptMonthData3.length; i++) {
        ptMonthData3[i] = 0
    }
    for (let i = 0; i < ptYearData3.length; i++) {
        ptYearData3[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (let i = 0; i < ptWeekData3.length; i++) {
        const monthPeriod = Math.floor(i / 4)
        ptMonthData3[monthPeriod] += ptWeekData3[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (let i = 0; i < ptMonthData3.length; i++) {
        const yearPeriod = Math.floor(i / 12)
        ptYearData3[yearPeriod] += ptMonthData3[i]
    }
}
// playtime dataset4
if (localStorage.getItem('playtimeData4') != null) {
    //Occupying Month and Year with 0's for calculation
    for (let i = 0; i < ptMonthData4.length; i++) {
        ptMonthData4[i] = 0
    }
    for (let i = 0; i < ptYearData4.length; i++) {
        ptYearData4[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (let i = 0; i < ptWeekData4.length; i++) {
        const monthPeriod = Math.floor(i / 4)
        ptMonthData4[monthPeriod] += ptWeekData4[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (let i = 0; i < ptMonthData4.length; i++) {
        const yearPeriod = Math.floor(i / 12)
        ptYearData4[yearPeriod] += ptMonthData4[i]
    }
}

// Spending Data
const spendingWeekData = JSON.parse(localStorage.getItem('spendingData'));
const spendingMonthData = new Array(Math.ceil(spendingWeekData.length / 4));
const spendingYearData = new Array(Math.ceil(spendingMonthData.length / 12));

if (localStorage.getItem('spendingData') != null) {
    //Occupying Month and Year with 0's for calculation
    for (var i = 0; i < spendingMonthData.length; i++) {
        spendingMonthData[i] = 0
    }
    for (var i = 0; i < spendingYearData.length; i++) {
        spendingYearData[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (var i = 0; i < spendingWeekData.length; i++) {
        var monthPeriod = Math.floor(i / 4)
        spendingMonthData[monthPeriod] += spendingWeekData[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (var i = 0; i < spendingMonthData.length; i++) {
        var yearPeriod = Math.floor(i / 12)
        spendingYearData[yearPeriod] += spendingMonthData[i]
    }
}

// playtime total data
const playtimeTotalWeekData = JSON.parse(localStorage.getItem('playtimeTotalData'));
const playtimeTotalMonthData = new Array(Math.ceil(playtimeTotalWeekData.length / 4));
const playtimeTotalYearData = new Array(Math.ceil(playtimeTotalMonthData.length / 12));

if (localStorage.getItem('playtimeTotalData') != null) {
    //Occupying Month and Year with 0's for calculation
    for (let i = 0; i < playtimeTotalMonthData.length; i++) {
        playtimeTotalMonthData[i] = 0
    }
    for (let i = 0; i < playtimeTotalYearData.length; i++) {
        playtimeTotalYearData[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (let i = 0; i < playtimeTotalWeekData.length; i++) {
        const monthPeriod = Math.floor(i / 4)
        playtimeTotalMonthData[monthPeriod] += playtimeTotalWeekData[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (let i = 0; i < playtimeTotalMonthData.length; i++) {
        const yearPeriod = Math.floor(i / 12)
        playtimeTotalYearData[yearPeriod] += playtimeTotalMonthData[i]
    }
}
// playtime global data
const playtimeGlobalWeekData = JSON.parse(localStorage.getItem('playtimeGlobalData'));
const playtimeGlobalMonthData = new Array(Math.ceil(playtimeGlobalWeekData.length / 4));
const playtimeGlobalYearData = new Array(Math.ceil(playtimeGlobalMonthData.length / 12));

if (localStorage.getItem('playtimeGlobalData') != null) {
    //Occupying Month and Year with 0's for calculation
    for (let i = 0; i < playtimeGlobalMonthData.length; i++) {
        playtimeGlobalMonthData[i] = 0
    }
    for (let i = 0; i < playtimeGlobalYearData.length; i++) {
        playtimeGlobalYearData[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (let i = 0; i < playtimeGlobalWeekData.length; i++) {
        const monthPeriod = Math.floor(i / 4)
        playtimeGlobalMonthData[monthPeriod] += playtimeGlobalWeekData[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (let i = 0; i < playtimeGlobalMonthData.length; i++) {
        const yearPeriod = Math.floor(i / 12)
        playtimeGlobalYearData[yearPeriod] += playtimeGlobalMonthData[i]
    }
}
// spending global data
const spendingGlobalWeekData = JSON.parse(localStorage.getItem('spendingGlobalData'));
const spendingGlobalMonthData = new Array(Math.ceil(spendingGlobalWeekData.length / 4));
const spendingGlobalYearData = new Array(Math.ceil(spendingGlobalMonthData.length / 12));

if (localStorage.getItem('spendingGlobalData') != null) {
    //Occupying Month and Year with 0's for calculation
    for (let i = 0; i < spendingGlobalMonthData.length; i++) {
        spendingGlobalMonthData[i] = 0
    }
    for (let i = 0; i < spendingGlobalYearData.length; i++) {
        spendingGlobalYearData[i] = 0
    }

    //Adding weeks in groups of 4 to get monthly totals
    for (let i = 0; i < spendingGlobalWeekData.length; i++) {
        const monthPeriod = Math.floor(i / 4)
        spendingGlobalMonthData[monthPeriod] += spendingGlobalWeekData[i]
    }

    //Adding months in groups of 12 to get yearly totals
    for (let i = 0; i < spendingGlobalMonthData.length; i++) {
        const yearPeriod = Math.floor(i / 12)
        spendingGlobalYearData[yearPeriod] += spendingGlobalMonthData[i]
    }
}

function swapPlaytimeData(chart, labels, dataSet, dataset2, dataset3, dataset4, xLabel) {
    const newDataset = {
        labels: labels,
        datasets: [{
            label: 'Game 1',
            backgroundColor: 'rgb(197, 162, 21, 0.2)',
            borderColor: 'rgb(197, 162, 21)',
            borderWidth: 1,
            data: dataSet
        }, {
            label: 'Game 2',
            backgroundColor: 'rgb(104, 197, 232, 0.2)',
            borderColor: 'rgb(104, 197, 232)',
            borderWidth: 1,
            data: dataset2
        }, {
            label: 'Game 3',
            backgroundColor: 'rgba(208, 91, 186, 0.2)',
            borderColor: 'rgba(208, 91, 186)',
            borderWidth: 1,
            data: dataset3
        }, {
            label: 'Game 4',
            backgroundColor: 'rgba(53, 205, 150, 0.2)',
            borderColor: 'rgba(53, 205, 150)',
            borderWidth: 1,
            data: dataset4
        }]
    };

    chart.config.data = newDataset;
    chart.config.options.scales.x.title.text = xLabel;
    chart.update();
}

function swapSpendingData(chart, labels, userDataSet, xLabel) {
    const newDataset = {
        labels: labels,
        datasets: [{
            label: 'User Spending',
            backgroundColor: 'rgba(208, 91, 186, 0.2)',
            borderColor: 'rgba(208, 91, 186)',
            borderWidth: 1,
            data: userDataSet
        }]
    };

    chart.config.data = newDataset;
    chart.config.options.scales.x.title.text = xLabel;
    chart.update();
}

function swapGlobalData(chart, labels, userDataSet, globalDataSet, xLabel) {
    const newDataset = {
        labels: labels,
        datasets: [{
            label: 'User',
            backgroundColor: 'rgba(208, 91, 186, 0.2)',
            borderColor: 'rgba(208, 91, 186)',
            borderWidth: 1,
            data: userDataSet
        }, {
            label: 'Global User Average',
            backgroundColor: 'rgba(53, 205, 150, 0.2)',
            borderColor: 'rgba(53, 205, 150)',
            borderWidth: 1,
            data: globalDataSet
        }]
    };

    chart.config.data = newDataset;
    chart.config.options.scales.x.title.text = xLabel;
    chart.update();
}

// playtime page buttons
if (document.getElementById("playtime-page") && !document.getElementById("global-page")) {
    console.log('playtime NOT global')
    document.getElementById("week-btn").addEventListener("click", () => swapPlaytimeData(playTimeChart, weekLabels, ptWeekData, ptWeekData2, ptWeekData3, ptWeekData4, 'Week'));
    document.getElementById("month-btn").addEventListener("click", () => swapPlaytimeData(playTimeChart, monthLabels, ptMonthData, ptMonthData2, ptMonthData3, ptMonthData4, 'Month'));
    document.getElementById("year-btn").addEventListener("click", () => swapPlaytimeData(playTimeChart, yearLabels, ptYearData, ptYearData2, ptYearData3, ptYearData4, 'Year'));
}

// spending page buttons
if (document.getElementById("spending-page") && !document.getElementById("global-page")) {
    console.log('spending NOT global')
    document.getElementById("spend-week-btn").addEventListener("click", () => swapSpendingData(spendingChart, weekLabels, spendingWeekData, 'Week'));
    document.getElementById("spend-month-btn").addEventListener("click", () => swapSpendingData(spendingChart, monthLabels, spendingMonthData, 'Month'));
    document.getElementById("spend-year-btn").addEventListener("click", () => swapSpendingData(spendingChart, yearLabels, spendingYearData, 'Year'));
}

// global ranking page buttons
if (document.getElementById("global-page") && document.getElementById("playtime-page")) {
    console.log('playtime AND global')
    document.getElementById("week-btn").addEventListener("click", () => swapGlobalData(playTimeChart, weekLabels, playtimeTotalWeekData, playtimeGlobalWeekData, 'Week'));
    document.getElementById("month-btn").addEventListener("click", () => swapGlobalData(playTimeChart, monthLabels, playtimeTotalMonthData, playtimeGlobalMonthData, 'Month'));
    document.getElementById("year-btn").addEventListener("click", () => swapGlobalData(playTimeChart, yearLabels, playtimeTotalYearData, playtimeGlobalYearData, 'Year'));
}

if (document.getElementById("global-page") && document.getElementById("spending-page")) {
    console.log('spending AND global')
    document.getElementById("spend-week-btn").addEventListener("click", () => swapGlobalData(spendingChart, weekLabels, spendingWeekData, spendingGlobalWeekData, 'Week'));
    document.getElementById("spend-month-btn").addEventListener("click", () => swapGlobalData(spendingChart, monthLabels, spendingMonthData, spendingGlobalMonthData, 'Month'));
    document.getElementById("spend-year-btn").addEventListener("click", () => swapGlobalData(spendingChart, yearLabels, spendingYearData, spendingGlobalYearData, 'Year'));
}

const weekBtn = document.getElementById('week-btn');
const monthBtn = document.getElementById('month-btn');
const yearBtn = document.getElementById('year-btn');
const spendWeekBtn = document.getElementById('spend-week-btn');
const spendMonthBtn = document.getElementById('spend-month-btn');
const spendYearBtn = document.getElementById('spend-year-btn');

function weekActive() {
    if (hasActive(monthBtn, yearBtn) || hasActive(yearBtn, monthBtn)) {
        weekBtn.classList.add('btn-active');
    }
}

function monthActive() {
    if (hasActive(weekBtn, yearBtn) || hasActive(yearBtn, weekBtn)) {
        monthBtn.classList.add('btn-active');
    }
}

function yearActive() {
    if (hasActive(weekBtn, yearBtn) || hasActive(monthBtn, weekBtn)) {
        yearBtn.classList.add('btn-active');
    }
}

function spendWeekActive() {
    if (hasActive(spendMonthBtn, spendYearBtn) || hasActive(spendYearBtn, spendMonthBtn)) {
        spendWeekBtn.classList.add('btn-active');
    }
}

function spendMonthActive() {
    if (hasActive(spendWeekBtn, spendYearBtn) || hasActive(spendYearBtn, spendWeekBtn)) {
        spendMonthBtn.classList.add('btn-active');
    }
}

function spendYearActive() {
    if (hasActive(spendWeekBtn, spendYearBtn) || hasActive(spendMonthBtn, spendWeekBtn)) {
        spendYearBtn.classList.add('btn-active');
    }
}

function hasActive(class1, class2) {
    if (class1.classList.contains('btn-active') && !class2.classList.contains('btn-active)')) {
        class1.classList.remove('btn-active');
        return true;
    }
}

// function showPlaytime() {
//     let chart = document.getElementById('playtime-month');
//     chart.style.display = "block";
//     // chart.style.display = chart.style.display === "none" ? "block" : "none";
// }
