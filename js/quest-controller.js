'use strict';

var gLastRes = null;
$(document).ready(init);
function init() {
    getQuestTree()
    $('h2').text('Think of someone')
}

function onStartGuessing() {
    $('.game-start').hide()
    $('.quest').show();
    renderQuest();
}

function renderQuest() {
    $('h2').text(getNextQuest())
}
function onUserResponse(res) {
    if (isChildless(gCurrQuest)) {
        if (res === 'yes') {
            alert('Yes, I knew it!');
            onRestartGame();
        } else {
            alert('I dont know...teach me!')
            $('.new-quest').show()
        }
    } else {
        gLastRes = res
        moveToNextQuest(res);
        renderQuest();
    }
}
function onAddGuess() {
    var newGuessTxt = ($('#newGuess').val())
    var newQuestTxt = ($('#newQuest').val())
    addGuess(newQuestTxt, newGuessTxt, gLastRes)
    onRestartGame();
}
function onRestartGame() {
    $('.new-quest').hide();


    $('.quest').hide();
    $('.game-start').show();
    gLastRes = null;
    init();


}

