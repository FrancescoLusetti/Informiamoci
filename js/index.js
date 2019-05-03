let data;
let index = 0;

$(document).ready(function(){
    loadJSON();
    //writeQuestion();
});

function loadJSON() {
    $.getJSON("question.json",function(json){
        data = json;
    });
}

function writeQuestion() {
    //$("#title").html(data[index]);
    //$("#question").html(data[index]);
    console.log(data[index]);
}

function goBack(){
    if(index<=0) index = data.length-1;
    else index--;
    writeQuestion();
}

function goForward() {
    if(index>=data.length-1) index = 0;
    else index++;
    writeQuestion();
}
