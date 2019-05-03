let data;
let index = 0;
$(document).ready(function(){

    loadJSON();
});

function loadJSON() {
    $.getJSON("question.json",(json)=>{
        data = json;
    });
}

function newQuestion() {
    console.log(data[index]);
}

function goBack(){
    if(index<=0) index = data.length-1;
    else index--;
    newQuestion();
}

function goForward() {
    if(index>=data.length-1) index = 0;
    else index++;
    newQuestion();
}
