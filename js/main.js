'use strict'

var gQuests
var gCurrQuestIdx 

function initGame() {
    gCurrQuestIdx = 0
    var elBtn = document.querySelector('.win')
    elBtn.style.display = 'none'
    gQuests = createQuests()
    renderQuest()
}

function createQuests() {
    gQuests = [
        { id: 1, opts:['Football player','Basketball player'], correctOptIndex: 1 },
        { id: 2, opts:['Noble horse','Cute cat'], correctOptIndex: 0 },
        { id: 3, opts:['Nice car',' Cool bike', 'Big truck'], correctOptIndex: 0 }
    ]
    return gQuests
}

function renderQuest() {
    var strQuest = ''
    var quest = gQuests[gCurrQuestIdx]
    var questPicIdx = gCurrQuestIdx + 1
    strQuest += `<img src='img/${questPicIdx}.jpg' alt='no pic' class='pic'><br>`
    for (var i = 0; i < quest.opts.length; i++) {
        var optText = quest.opts[i]
        strQuest += `<button onclick='checkAnswer(${i})'>${optText} </button>`
    }
    var elquest = document.querySelector('.quest')
    elquest.innerHTML = strQuest
    // console.log('strQuest: ', strQuest)
}

function checkAnswer(optIdx) {
    console.log('option index:', optIdx)
    if (gCurrQuestIdx === gQuests.length) return
    var elQuestMsg = document.querySelector('.quest-msg')
    var quest = gQuests[gCurrQuestIdx]
    var correctAnswerIndx = quest.correctOptIndex
    if (optIdx === correctAnswerIndx) {
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) {
            console.log('you won');
            var elBtn = document.querySelector('.win')
            elBtn.style.display = 'block'
            return
        }
        elQuestMsg.innerText = "Correct, let's move on to the next quest"
        setTimeout(function () {
            elQuestMsg.innerText = ''
            renderQuest()
        }, 1000)
    } else {
        elQuestMsg.innerText = 'No, please try again'
        setTimeout(function () {
            elQuestMsg.innerText = ''
        }, 1000)
    }
}

// fogogohhihhgg