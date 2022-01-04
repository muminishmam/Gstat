//Set spending goal range default values to 0 and 0

function fetchFields() {
    var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))

    if (localStorage.getItem('spendingStartWeekSaved') == null) {
        localStorage.setItem('spendingStartWeekSaved', currSpendingData.length - 1)
    }

    if (localStorage.getItem('spendingSpanSaved') == null) {
        localStorage.setItem('spendingSpanSaved', 0)
    }

    if (localStorage.getItem('spendingGoalNumberSaved') == null) {
        localStorage.setItem('spendingGoalNumberSaved', 1)
    }

    //Set playtime goal range default values to 0 and 0
    if (localStorage.getItem('ptStartWeekSaved') == null) {
        localStorage.setItem('ptStartWeekSaved', currSpendingData.length - 1)
    }

    if (localStorage.getItem('ptSpanSaved') == null) {
        localStorage.setItem('ptSpanSaved', 0)
    }

    if (localStorage.getItem('ptGoalNumberSaved') == null) {
        localStorage.setItem('ptGoalNumberSaved', 1)
    }

    //If there is a spending goal range saved, retrieve it
    if (localStorage.getItem('spendingStartWeekSaved') != null) {
        document.getElementById('spendingStartWeek').value = JSON.parse(localStorage.getItem('spendingStartWeekSaved'))
    }

    if (localStorage.getItem('spendingSpanSaved') != null) {
        document.getElementById('spendingSpan').value = JSON.parse(localStorage.getItem('spendingSpanSaved'))
    }

    if (localStorage.getItem('spendingGoalNumberSaved') != null) {
        document.getElementById('spendingGoalNumber').value = JSON.parse(localStorage.getItem('spendingGoalNumberSaved'))
    }

    //If there is a playtime goal range saved, retrieve it
    if (localStorage.getItem('ptStartWeekSaved') != null) {
        document.getElementById('ptStartWeek').value = JSON.parse(localStorage.getItem('ptStartWeekSaved'))
    }

    if (localStorage.getItem('ptSpanSaved') != null) {
        document.getElementById('ptSpan').value = JSON.parse(localStorage.getItem('ptSpanSaved'))
    }

    if (localStorage.getItem('ptGoalNumberSaved') != null) {
        document.getElementById('ptGoalNumber').value = JSON.parse(localStorage.getItem('ptGoalNumberSaved'))
    }


    //Fill spending progress
    var spendingTotal = 0
    var spendingPeriod = JSON.parse(document.getElementById('spendingSpan').value)
    var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))

    for (var i = 0; i <= spendingPeriod; i++) {
        if (JSON.parse(document.getElementById('spendingStartWeek').value) + i < currSpendingData.length) {
            spendingTotal += currSpendingData[JSON.parse(document.getElementById('spendingStartWeek').value) + i]
        }
    }
    var spendingBarPercent = (spendingTotal * 1.0 / JSON.parse(document.getElementById('spendingGoalNumber').value)) * 100
    document.getElementById("spendingGoalText").innerHTML = spendingBarPercent.toFixed(2) + "%"
    document.getElementById("spendingGoalProgressBar").style.width = spendingBarPercent + "%"


    //Fill playtime progress
    var ptTotal = 0
    var ptPeriod = JSON.parse(document.getElementById('ptSpan').value)
    var currPtData = JSON.parse(localStorage.getItem('playtimeData'))

    for (var i = 0; i < ptPeriod; i++) {
        if (JSON.parse(document.getElementById('ptStartWeek').value) + i < currSpendingData.length) {
            ptTotal += currPtData[JSON.parse(document.getElementById('ptStartWeek').value) + i]
        }
    }
    var ptBarPercent = (ptTotal * 1.0 / document.getElementById('ptGoalNumber').value) * 100
    document.getElementById("ptGoalText").innerHTML = ptBarPercent.toFixed(2) + "%"
    document.getElementById("ptGoalProgressBar").style.width = ptBarPercent + "%"

    createMessage(spendingTotal, ptTotal)
}

//Save goal
function goalSave() {
    clearSaveMessage()
    //If the starting and ending week are not null, ant if the starting week is less than or equal to the ending week, save
    var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))
    var spendingStartValid = document.getElementById('spendingStartWeek') != null && document.getElementById('spendingStartWeek').value >= 0
    var ptStartValid = document.getElementById('ptStartWeek') != null && document.getElementById('ptStartWeek').value >= 0
    var spendingGoalValid = document.getElementById('spendingGoalNumber') != null && document.getElementById('spendingGoalNumber').value > 0
    var ptGoalValid = document.getElementById('ptGoalNumber') != null && document.getElementById('ptGoalNumber').value > 0
    var spendingSpanValid = document.getElementById('spendingSpan') != null && document.getElementById('spendingSpan').value >= 0
    var ptSpanValid = document.getElementById('ptSpan') != null && document.getElementById('ptSpan').value >= 0

    if (spendingStartValid && ptStartValid && spendingSpanValid && ptSpanValid) {
        if (spendingGoalValid && ptGoalValid) {

            localStorage.setItem('spendingStartWeekSaved', JSON.stringify(document.getElementById('spendingStartWeek').value))
            localStorage.setItem('spendingSpanSaved', JSON.stringify(document.getElementById('spendingSpan').value))
            localStorage.setItem('spendingGoalNumberSaved', JSON.stringify(document.getElementById('spendingGoalNumber').value))

            localStorage.setItem('ptStartWeekSaved', JSON.stringify(document.getElementById('ptStartWeek').value))
            localStorage.setItem('ptSpanSaved', JSON.stringify(document.getElementById('ptSpan').value))
            localStorage.setItem('ptGoalNumberSaved', JSON.stringify(document.getElementById('ptGoalNumber').value))

            document.getElementById('goalSaveMessage').innerHTML = "Goal Periods Saved"
        } else {
            document.getElementById('goalSaveMessage').innerHTML = "Enter Valid Goal Amount"
        }
    } else {
        document.getElementById('goalSaveMessage').innerHTML = "Enter Valid Goal Period"
    }

    setTimeout(clearSaveMessage, 1000)
    fetchFields()
}

function clearSaveMessage() {
    document.getElementById('goalSaveMessage').innerHTML = ""
}

function createMessage(spending, playtime) {

    var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))

    var mySpendingGoal = JSON.parse(localStorage.getItem('spendingGoalNumberSaved'))
    var mySpendingStart = JSON.parse(localStorage.getItem('spendingStartWeekSaved'))
    var mySpendingSpan = JSON.parse(localStorage.getItem('spendingSpanSaved'))
    var spendingMessage = '';

    var myPlaytimeGoal = JSON.parse(localStorage.getItem('ptGoalNumberSaved'))
    var myPlaytimeStart = JSON.parse(localStorage.getItem('ptStartWeekSaved'))
    var myPlaytimeSpan = JSON.parse(localStorage.getItem('ptSpanSaved'))
    var playtimeMessage = '';

    //SPENDING MESSAGE
    //Goal period not started
    if (mySpendingStart >= currSpendingData.length) {
        spendingMessage = "The current week is " + (currSpendingData.length - 1) + ", your goal period has not started yet."
    }   //Middle of goal period
    else if (+mySpendingStart + +mySpendingSpan >= currSpendingData.length - 1) {
        if (+mySpendingStart + +mySpendingSpan - (currSpendingData.length - 1) == 1) {
            spendingMessage = "Since your goal has started on week " + JSON.parse(localStorage.getItem('spendingStartWeekSaved')) + ", you have spent $" + spending + " out of your $" + mySpendingGoal + " budget with 1 week remaining."
        } else {
            spendingMessage = "Since your goal has started on week " + JSON.parse(localStorage.getItem('spendingStartWeekSaved')) + ", you have spent $" + spending + " out of your $" + mySpendingGoal + " budget with " + ((+mySpendingStart + +mySpendingSpan) - (+currSpendingData.length - 1)) + " weeks remaining."
        }
        if (spending < mySpendingGoal) {
            spendingMessage += "<br>Keep up the good work!"
        } else if (spending == mySpendingGoal) {
            spendingMessage += "<br>Be sure not to spend more."
        } else {
            spendingMessage += "<br>Please be sure to limit your spending."
        }
    } //Goal period over
    else if (+mySpendingStart + +mySpendingSpan < currSpendingData.length) {
        if (spending <= mySpendingGoal) {
            spendingMessage += "Congratulations! <br> You have succeeded at "
        } else {
            spendingMessage += "Unfortunately, <br> You have failed "
        }
        spendingMessage += "your goal of spending $" + mySpendingGoal + " or less by spending $" + spending + " from weeks " + mySpendingStart + " to " + (+mySpendingStart + +mySpendingSpan)

    }

    //PLAYTIME MESSAGE
    //Goal period not started
    if (myPlaytimeStart >= currSpendingData.length) {
        playtimeMessage = "The current week is " + (currSpendingData.length - 1) + ", your goal period has not started yet."
    }   //Middle of goal period
    else if (+myPlaytimeStart + +myPlaytimeSpan >= currSpendingData.length - 1) {
        if (+myPlaytimeStart + +myPlaytimeSpan - (currSpendingData.length - 1) == 1) {
            playtimeMessage = "Since your goal has started on week " + JSON.parse(localStorage.getItem('spendingStartWeekSaved')) + ", you have played " + playtime + " hours out of your " + myPlaytimeGoal + " hour budget with 1 week remaining."
        } else {
            playtimeMessage = "Since your goal has started on week " + JSON.parse(localStorage.getItem('spendingStartWeekSaved')) + ", you have played " + playtime + " hours out of your " + myPlaytimeGoal + " hour budget with " + ((+myPlaytimeStart + +myPlaytimeSpan) - (+currSpendingData.length - 1)) + " weeks remaining."
        }
        if (playtime < myPlaytimeGoal) {
            playtimeMessage += "<br>Keep up the good work!"
        } else if (playtime == myPlaytimeGoal) {
            playtimeMessage += "<br>Be sure not to play too much."
        } else {
            playtimeMessage += "<br>Please be sure to limit your playtime."
        }
    } //Goal period over
    else if (+myPlaytimeStart + +myPlaytimeSpan < currSpendingData.length) {
        if (playtime <= myPlaytimeGoal) {
            playtimeMessage += "Congratulations! <br> You have succeeded at "
        } else {
            playtimeMessage += "Unfortunately, <br> You have failed "
        }
        playtimeMessage += "your goal of playing " + myPlaytimeGoal + " hours or less by playing for " + playtime + " hours from weeks " + myPlaytimeStart + " to " + (+myPlaytimeStart + +myPlaytimeSpan)

    }

    document.getElementById('spendingGoalDescription').innerHTML = spendingMessage
    document.getElementById('ptGoalDescription').innerHTML = playtimeMessage
}

function emptyFields() {
    document.getElementById('spendingStartWeek').value = ''
    document.getElementById('spendingSpan').value = ''
    document.getElementById('spendingGoalNumber').value = ''
    document.getElementById('ptStartWeek').value = ''
    document.getElementById('ptSpan').value = ''
    document.getElementById('ptGoalNumber').value = ''
    document.getElementById('goalSaveMessage').innerHTML = ''
}
