
var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;


function createQuestsTree() {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    saveTreeToLocalStorage()

}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}
function getQuestTree(){
    gQuestsTree=loadTree()
    if(gQuestsTree===null){
        createQuestsTree()
    }
    gCurrQuest=gQuestsTree;
    gPrevQuest=null;
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest=gCurrQuest;
    gCurrQuest=gCurrQuest[res]
    
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    var newNode= createQuest(newQuestTxt)
    newNode.yes=createQuest(newGuessTxt) ;
    newNode.no=gPrevQuest[lastRes]
    gPrevQuest[lastRes]=newNode
    saveTreeToLocalStorage()
}
function getNextQuest(){
    return gCurrQuest.txt;
}
function getCurrQuest(){
    return gCurrQuest;
}
function getPrevQuest(){

}
function saveTreeToLocalStorage(){
    localStorage.setItem('questsTree', JSON.stringify(gQuestsTree));
}
 function loadTree(){
    return JSON.parse(localStorage.getItem('questsTree'));
 } 
 function clearLocalStorage(){
     localStorage.removeItem('questsTree')
     createQuestsTree()
 }





