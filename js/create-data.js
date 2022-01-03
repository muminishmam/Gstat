// Playtime Default Data
const playtimeDefault = [3, 5, 2, 0, 9, 11, 4, 8, 1, 7, 10, 4, 3, 3, 5, 1, 8, 5, 11, 6, 3, 7, 10, 9, 4, 5, 7, 4, 11, 8, 5, 11, 1, 0, 5, 10, 7, 1, 6, 2, 0, 1, 6, 8, 3, 5, 5, 3, 1, 0, 6, 7, 11, 11, 4, 11, 11, 7, 10, 4, 5, 0, 2, 6, 4, 5, 8, 3, 2, 5, 4, 1, 1, 6, 4, 1, 4, 10, 6, 11, 2, 9, 3, 3, 6, 11, 4, 5, 5, 5, 11, 6, 6, 11, 1, 7, 9, 3, 2, 2, 6, 0, 7, 10, 1, 11, 1, 0, 10, 9, 5, 1, 4, 1, 3, 0, 5, 11, 9, 7, 11, 4, 1, 7, 3, 8, 10, 9, 5, 1]

if (localStorage.getItem('playtimeData') == null) {
    localStorage.setItem('playtimeData', JSON.stringify(playtimeDefault))
    console.log(localStorage.getItem('playtimeData'));
}

const playtimeDefault2 = [5, 5, 9, 8, 3, 3, 9, 8, 11, 3, 7, 8, 6, 1, 11, 4, 1, 1, 10, 6, 8, 6, 4, 9, 10, 5, 1, 11, 10, 5, 4, 10, 10, 8, 11, 7, 2, 8, 6, 3, 8, 3, 6, 1, 7, 9, 0, 1, 11, 0, 0, 10, 11, 3, 11, 2, 9, 1, 11, 7, 1, 8, 0, 11, 6, 6, 11, 5, 10, 8, 7, 9, 0, 7, 8, 2, 9, 4, 1, 11, 7, 0, 4, 6, 10, 1, 6, 6, 11, 0, 5, 9, 8, 11, 11, 10, 4, 4, 0, 5, 6, 11, 3, 10, 10, 11, 1, 2, 10, 4, 9, 9, 11, 4, 1, 5, 6, 11, 7, 5, 9, 1, 2, 4, 6, 11, 10, 2, 6, 5]

if (localStorage.getItem('playtimeData2') == null) {
    localStorage.setItem('playtimeData2', JSON.stringify(playtimeDefault2))
    console.log(localStorage.getItem('playtimeData2'));
}

const playtimeDefault3 = [10, 7, 9, 9, 3, 2, 2, 6, 10, 8, 3, 1, 0, 7, 10, 2, 11, 11, 10, 11, 3, 5, 7, 6, 8, 11, 0, 3, 8, 0, 3, 2, 10, 9, 0, 0, 4, 10, 5, 4, 10, 10, 9, 6, 10, 10, 11, 9, 8, 6, 0, 4, 1, 0, 9, 0, 2, 6, 9, 11, 6, 10, 11, 11, 6, 1, 6, 9, 4, 8, 8, 10, 8, 9, 4, 9, 0, 2, 6, 10, 4, 7, 9, 5, 9, 9, 5, 0, 4, 8, 7, 11, 7, 11, 11, 8, 11, 3, 2, 9, 2, 10, 7, 10, 7, 2, 7, 7, 2, 10, 10, 9, 1, 8, 1, 3, 1, 9, 4, 5, 5, 9, 0, 6, 2, 11, 10, 11, 6, 11]

if (localStorage.getItem('playtimeData3') == null) {
    localStorage.setItem('playtimeData3', JSON.stringify(playtimeDefault3))
    console.log(localStorage.getItem('playtimeData3'));
}

const playtimeDefault4 = [2, 5, 2, 1, 9, 0, 4, 1, 6, 1, 2, 0, 11, 10, 11, 7, 10, 1, 10, 10, 0, 8, 0, 5, 4, 10, 2, 1, 8, 7, 6, 3, 11, 11, 10, 0, 11, 4, 9, 11, 11, 1, 10, 11, 11, 8, 6, 8, 1, 1, 3, 1, 9, 11, 1, 0, 6, 8, 3, 3, 3, 6, 9, 2, 9, 6, 10, 1, 2, 6, 9, 3, 11, 0, 1, 1, 4, 3, 6, 1, 8, 0, 1, 9, 3, 2, 2, 11, 2, 8, 3, 5, 10, 11, 7, 5, 8, 3, 1, 0, 3, 2, 11, 8, 10, 9, 1, 2, 9, 9, 5, 10, 2, 6, 0, 1, 9, 0, 7, 8, 11, 4, 3, 1, 3, 0, 7, 0, 4, 6]

if (localStorage.getItem('playtimeData4') == null) {
    localStorage.setItem('playtimeData4', JSON.stringify(playtimeDefault4))
    console.log(localStorage.getItem('playtimeData4'));
}

// Spending Default Data
const spendingDefaultData = [84, 0, 0, 0, 87, 0, 0, 0, 27, 0, 0, 0, 40, 0, 0, 0, 65, 0, 0, 0, 56, 0, 0, 0, 99, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 47, 0, 0, 0, 99, 0, 0, 0, 99, 0, 0, 0, 12, 0, 0, 0, 19, 0, 0, 0, 7, 0, 0, 0, 37, 0, 0, 0, 77, 0, 0, 0, 27, 0, 0, 0, 39, 0, 0, 0, 67, 0, 0, 0, 7, 0, 0, 0, 54, 0, 0, 0, 38, 0, 0, 0, 60, 0, 0, 0, 78, 0, 0, 0, 68, 0, 0, 0, 91, 0, 0, 0, 93, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 77, 0]

if (localStorage.getItem('spendingData') == null) {
    localStorage.setItem('spendingData', JSON.stringify(spendingDefaultData))
    console.log(localStorage.getItem('spendingData'));
}

const spendingGlobalDefaultData = [11, 0, 0, 0, 29, 0, 0, 0, 78, 0, 0, 0, 7, 0, 0, 0, 28, 0, 0, 0, 77, 0, 0, 0, 64, 0, 0, 0, 13, 0, 0, 0, 76, 0, 0, 0, 49, 0, 0, 0, 47, 0, 0, 0, 37, 0, 0, 0, 84, 0, 0, 0, 2, 0, 0, 0, 57, 0, 0, 0, 15, 0, 0, 0, 16, 0, 0, 0, 39, 0, 0, 0, 19, 0, 0, 0, 30, 0, 0, 0, 94, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 77, 0, 0, 0, 12, 0, 0, 0, 86, 0, 0, 0, 95, 0, 0, 0, 71, 0, 0, 0, 88, 0, 0, 0, 12, 0, 0, 0, 77, 0, 0, 0, 51, 0]

if (localStorage.getItem('spendingGlobalData') == null) {
    localStorage.setItem('spendingGlobalData', JSON.stringify(spendingGlobalDefaultData))
    console.log(localStorage.getItem('spendingGlobalData'));
}

// Playtime Total Data
function sumPlaytimeData(game1, game2, game3, game4) {
    let playtimeTotalData = [];

    for (let i = 0; i < game1.length; i++) {
        playtimeTotalData[i] = game1[i] + game2[i] + game3[i] + game4[i];
    }
    return playtimeTotalData;
}

const playtimeTotalDefaultData = sumPlaytimeData(playtimeDefault, playtimeDefault2, playtimeDefault3, playtimeDefault4);

if (localStorage.getItem('playtimeTotalData') == null) {
    localStorage.setItem('playtimeTotalData', JSON.stringify(playtimeTotalDefaultData))
    console.log(localStorage.getItem('playtimeTotalData'));
}

// Global Playtime Data
const randomData1 = [2, 6, 9, 8, 9, 2, 6, 7, 7, 7, 9, 2, 10, 5, 1, 1, 6, 2, 8, 0, 0, 9, 3, 7, 0, 3, 11, 4, 3, 9, 3, 3, 5, 10, 6, 1, 11, 1, 4, 9, 3, 6, 7, 0, 2, 11, 2, 0, 1, 11, 3, 5, 4, 0, 6, 11, 10, 2, 3, 7, 4, 6, 6, 3, 8, 4, 10, 9, 10, 7, 1, 0, 9, 7, 8, 1, 4, 10, 1, 4, 8, 6, 1, 9, 5, 10, 1, 9, 6, 4, 3, 6, 4, 1, 5, 0, 10, 7, 6, 0, 11, 5, 2, 10, 10, 6, 3, 0, 11, 4, 0, 6, 2, 10, 4, 10, 2, 5, 7, 11, 10, 0, 4, 1, 10, 0, 10, 8, 1, 8]
const randomData2 = [2, 4, 2, 7, 6, 1, 4, 6, 0, 2, 8, 3, 2, 5, 6, 8, 10, 7, 1, 4, 0, 7, 8, 4, 6, 4, 6, 1, 10, 9, 0, 4, 1, 7, 10, 3, 2, 10, 11, 11, 5, 0, 11, 4, 0, 11, 6, 0, 9, 8, 2, 1, 10, 7, 5, 5, 9, 1, 4, 4, 6, 11, 5, 7, 1, 9, 2, 8, 2, 10, 0, 11, 7, 10, 2, 4, 2, 6, 4, 2, 8, 1, 3, 10, 3, 4, 5, 6, 2, 1, 11, 1, 5, 2, 8, 2, 3, 5, 11, 5, 2, 8, 2, 5, 7, 7, 8, 3, 10, 10, 10, 11, 11, 6, 8, 4, 8, 3, 0, 4, 2, 7, 11, 3, 9, 0, 1, 3, 4, 9]
const randomData3 = [11, 7, 2, 9, 6, 7, 6, 2, 8, 0, 11, 11, 8, 5, 0, 1, 0, 9, 8, 9, 9, 0, 1, 7, 3, 2, 3, 3, 5, 7, 2, 5, 1, 8, 2, 3, 9, 6, 4, 9, 6, 2, 2, 11, 5, 1, 6, 6, 5, 10, 7, 1, 7, 6, 5, 6, 3, 7, 0, 7, 9, 9, 8, 1, 3, 3, 4, 1, 11, 10, 3, 1, 6, 0, 0, 6, 3, 6, 11, 6, 3, 2, 3, 8, 10, 0, 3, 8, 3, 5, 0, 4, 8, 3, 0, 3, 4, 9, 3, 11, 2, 11, 6, 2, 8, 8, 9, 7, 6, 7, 8, 2, 2, 10, 9, 0, 0, 7, 3, 1, 7, 2, 8, 2, 5, 10, 0, 4, 9, 3]
const randomData4 = [10, 8, 2, 11, 9, 1, 10, 3, 11, 4, 2, 5, 4, 8, 9, 2, 5, 9, 5, 3, 5, 11, 7, 8, 0, 8, 0, 10, 7, 7, 2, 5, 7, 11, 7, 9, 11, 2, 1, 4, 3, 2, 0, 7, 2, 3, 6, 5, 8, 7, 3, 8, 3, 7, 7, 2, 3, 0, 8, 4, 8, 11, 2, 0, 0, 8, 2, 1, 2, 4, 0, 6, 9, 11, 11, 1, 8, 5, 4, 10, 3, 6, 3, 0, 9, 7, 4, 10, 1, 5, 10, 7, 4, 4, 10, 4, 11, 7, 0, 4, 2, 11, 2, 2, 0, 4, 10, 11, 6, 6, 0, 7, 4, 5, 9, 2, 2, 10, 5, 6, 5, 8, 6, 3, 3, 0, 8, 2, 2, 2]

const playtimeGlobalDefaultData = sumPlaytimeData(randomData1, randomData2, randomData3, randomData4) // need to create the rest of the values

if (localStorage.getItem('playtimeGlobalData') == null) {
    localStorage.setItem('playtimeGlobalData', JSON.stringify(playtimeGlobalDefaultData))
    console.log(localStorage.getItem('playtimeGlobalData'));
}